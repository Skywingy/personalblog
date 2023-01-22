import React from 'react';
import './post.css';
import Picte from './99bab136883027.572c9c88bf61c.jpg';

export default function Post() {
    return (
        <div className='post'>
            <img src={Picte} alt="" className='postImg' />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum, dolor sit amet.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore corporis quisquam maxime iste a, dolorem neque quaerat? Temporibus veniam pariatur mollitia. Fugit consequatur porro recusandae ab nisi perspiciatis placeat modi necessitatibus, nemo sunt eius sed quae, velit nostrum at pariatur rem aliquid, in quaerat vel. Voluptate, maxime necessitatibus corrupti laboriosam eius iusto repellendus aperiam cupiditate fugiat in doloribus illo repellat recusandae. Dolorem assumenda eaque veniam porro inventore dolorum placeat earum, facilis laudantium fugit voluptatem architecto quam soluta est a minima accusantium. Repellat, cupiditate error sit debitis, iure minus numquam, blanditiis architecto laboriosam placeat nulla omnis iusto rem ea recusandae ut.
            </p>
        </div>
    )
}
