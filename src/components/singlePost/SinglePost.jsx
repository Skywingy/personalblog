import React from 'react';
import './singlepost.css';
import pi from './IMG_9309.JPG';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={pi} alt="img" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-delete-left"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                        <span className='singlePostAuthor'>
                            Autor:  <b>Safak</b>
                        </span>
                        <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eligendi inventore quaerat doloremque rem, commodi culpa maxime maiores quidem laboriosam! Possimus est quasi ea temporibus corporis veritatis odio excepturi odit voluptatibus tempora provident corrupti qui praesentium numquam minus quod cumque fugit magni laborum amet, commodi velit unde asperiores eaque. Libero, saepe. Illo asperiores quibusdam eligendi animi tempora obcaecati, dolor id eveniet culpa beatae ut, ab tempore reiciendis doloribus vitae officiis fuga rem quasi quos labore, delectus recusandae! Id sapiente vitae quos dolorum aspernatur dolores magni quo ab explicabo at fugit eum, laudantium dolore quisquam autem delectus tenetur architecto? Molestias dolorum ipsa quo hic vel ea culpa sint reprehenderit aliquid libero ad rerum, nihil animi magnam deleniti quae porro eaque minima ut veniam! Asperiores assumenda placeat ratione pariatur consectetur quidem veniam fuga, nesciunt maxime tempora debitis exercitationem a incidunt est sint maiores hic ducimus cumque temporibus! Ea quaerat molestiae, iure sequi ad tempore eligendi vel, eius dolorum consequuntur at neque mollitia eum ipsum velit quibusdam hic odit recusandae dignissimos, placeat ipsa ratione omnis. Eveniet omnis velit commodi quis in rem quo, accusamus nihil. Architecto aperiam magni voluptatibus ullam tempore similique dignissimos vitae quis, facilis autem? Veniam nihil sapiente eligendi rerum tempora perspiciatis repellendus doloremque aliquid libero similique praesentium excepturi, nemo quis voluptatum optio, in iure iusto maxime alias accusantium maiores atque! Ipsam itaque, sed ut dolor officiis dolorem, perspiciatis perferendis quod dolore voluptatibus omnis architecto aliquid ex! Minus molestias dicta dolore, placeat eveniet nulla neque modi ad numquam, sequi quasi necessitatibus accusantium ducimus velit a et dolores error expedita id possimus. Cum inventore, veritatis corrupti architecto aut quos, ullam mollitia magnam repudiandae fugit maxime omnis nobis fuga? Voluptatum ad cumque quaerat in saepe quam, ut quisquam, adipisci rem voluptate laboriosam ea nobis debitis quis numquam, excepturi odit quae autem. Odio, fuga.
                </p>
            </div>
        </div>
  )
}
