import React, { useState } from 'react';
import './sidebar.css';
import Pictu from './flutterfire_300x.png';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/category");
            setCats(res.data);
        };
        getCats();
    },[]);

    return (
        <div className='sidebar'>
            <div className="sidebarItem"></div>
            <span className="sidebarTitle">About me</span>
            <img src={Pictu} alt="sidebarImg" className='sidebarImg'/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, architecto sit. Suscipit, quasi vel exercitationem reiciendis quia optio dolores doloremque?
            </p>
            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link className='link' to={`/?cat=${c.name}`}>
                        <li className="sidebarListItem">{c.name}</li>  
                    </Link>                    
                ))}
                
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>
        </div>
    )
}
