import React, { useContext } from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';


export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:3000/images/";
    const hanldeLogout = () =>{
        dispatch({
            type:"LOGOUT"
        });
    };
    return (
        <div className='top'>
            <div className="topLeft">
                <ul className='topList'>
                <li className='topListItem'>
                        <Link className='link logo' to='/'>Ohaayooo</Link>
                    </li>
                </ul>
                {/* <i className="icon fa-brands fa-square-facebook"></i>
                <i className="icon fa-brands fa-square-instagram"></i> */}
            </div>
            <div className="topCenter">
                <ul className='topList'>
                    
                    
                    {/* <li className='topListItem'>
                        <Link className='link' to='/contact'>Contact</Link></li> */}
                    <li className='topListItem'>
                        
                    </li>
                    
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>
                            <Link className='link topListItem' to='/write'>
                                Write
                            </Link>
                            <Link to='/settings' className='topListItem link'>
                                <img className='prof' src={PF + user.profilePic} alt="prof" />
                            </Link>
                            <Link className='topListItem link'onClick={hanldeLogout}>
                                {user && "Logout"}
                            </Link>
                        </>   
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/about'>About</Link>
                            </li>
                            {/* <li className='topListItem'>
                                <Link className='link' to='/login'>Login</Link>
                            </li> */}
                            {/* <li className='topListItem'>
                                <Link className='link' to='/register'>Register</Link>
                            </li> */}
                        </ul>
                        
                    )
                }
                
                {/* <i className="searchIcon fa-solid fa-magnifying-glass"></i> */}
            </div>
        </div>
    )
}
