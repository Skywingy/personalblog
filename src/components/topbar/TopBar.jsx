import React from 'react';
import './topbar.css';
import Pic from './Profile1.png';
import { Link } from 'react-router-dom';


export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i class="icon fa-brands fa-square-facebook"></i>
                <i class="icon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/about'>About</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/contact'>Contact</Link></li>
                    <li className='topListItem'>
                        <Link className='link' to='/write'>Write</Link></li>
                    <li className='topListItem'>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='prof' src={Pic} alt="prof" />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>Login</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>Register</Link>
                            </li>
                        </ul>
                        
                    )
                }
                
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
