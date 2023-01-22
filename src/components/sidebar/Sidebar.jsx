import React from 'react';
import './sidebar.css';
import Pictu from './flutterfire_300x.png';

export default function Sidebar() {
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i class="sidebarIcon fa-brands fa-square-facebook"></i>
                <i class="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>
        </div>
    )
}
