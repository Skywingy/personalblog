import React from 'react';
import './write.css';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import {Context} from '../../context/Context';
const Chance = require('chance');


export default function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);
    

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            userId: user._id,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const chance = new Chance();
            const randomString = chance.string({ length: 20, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' });
            const filename = Date.now() + randomString;
            data.append("name", filename);
            data.append("file", file);
            data.append("username", user.username);
            data.append("userId", user._id);
            data.append("title", title);
            data.append("desc", desc);
            console.log('----------------', data)
            newPost.photo = filename;
            try {
                const res = await axios.post("/upload", data);
                console.log('what is in thereeee', res)
                window.location.replace("/post/" + res.data._id);
            }   catch(err){
                console.error(err)
            }
            }
            /* try {
                const res = await axios.post('/posts', newPost);
                window.location.replace("/post/" + res.data._id);
            }
            catch(err){
                console.log('error', err)
            } */
        }

    return (
        <div className='write'>
            {file && <img src={URL.createObjectURL(file)} alt="" className='writeImg'/>
            }
            <form className="writeForm" onSubmit={hanldeSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} onChange={e => setFile(e.target.files[0])}/>
                    <input type="text" placeholder='Title' className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className="writeInput writeText" 
                    onChange={e=>setDesc(e.target.value)}></textarea>
                </div>
                <button className='writeSubmit' type='submit'>Publish</button>
            </form>
        </div>
    )
}
