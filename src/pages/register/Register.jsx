import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className='registerForm'>
                <label>Email</label>
                <input className='registerInput' type="text" placeholder='Enter your email...'/>
                <label>Username</label>
                <input className='registerInput' type="text" placeholder='Enter your username...'/>
                <label>Password</label>
                <input lassName='registerInput' type="password" placeholder='Enter your password...'/>
                <button className='registerButton'>
                    <Link className='link' to='/login'>Register</Link>
                </button>
                <button className='registerLoginButton'>
                    <Link className='link' to='/login'>Login</Link>
                </button>
            </form>
        </div>
    )
}
