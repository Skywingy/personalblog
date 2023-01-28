import React from 'react';
import './posts.css';
import POST from '../post/Post';

export default function Posts({posts}) {
    return (
        <div className='posts'>
            {posts.map(p => (
                <POST post={p} />
            ))}
        </div>
    )
}
