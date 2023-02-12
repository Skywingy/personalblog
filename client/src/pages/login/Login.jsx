import axios from 'axios';
import React, { useRef } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css';
import { useNavigate } from 'react-router-dom';



//login button дарахад handlesubmit dispatch хийнэ.
//хамгийн түрүүнд reducer рүү явна
//хэрэв 

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START",})
        try {
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            console.log('============', res.data);
            navigate('/');
        }   
        catch(err){
            dispatch({type: "LOGIN_FAILURE"});
        }
    }
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    className='loginInput' 
                    type="text" 
                    placeholder='Enter your username...' 
                    ref={userRef}
                    />
                <label>Password</label>
                <input 
                    className='loginInput' 
                    type="password" 
                    placeholder='Enter your password...' 
                    ref={passwordRef}
                    />
                <button className='loginButton' type='submit' disabled={isFetching}>
                    Login
                </button>   
            </form>
            <button className='loginRegisterButton'>
                    <Link className='link' to='/register'>Register</Link>
            </button>
        </div>
    );
}
