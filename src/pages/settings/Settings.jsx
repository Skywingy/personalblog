import React from 'react'
import './settings.css'
import SideBar from '../../components/sidebar/Sidebar'
import pic from './Profile1.png'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Prof Pic</label>
                    <div className="settingsPP">
                        <img src={pic} alt="img" />
                        <label htmlFor="fileInput">
                            <i className="fa-regular fa-circle-user settingsPPICon"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:"none"}} />
                    </div>
                    <label>Username</label> 
                    <input type="text" placeholder='Safak'/>
                    <label>Email</label> 
                    <input type="email" placeholder='Safak@gmail.com'/>
                    <label>Password</label> 
                    <input type="password"/>
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <SideBar/>  
        </div>
    )
}
