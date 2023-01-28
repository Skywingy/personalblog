import React from 'react';
import './header.css';
import Pict from './Kokooma_10.jpeg';

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src={Pict} alt="img" />
        </div>
    )
}
