import React from 'react'

export default function UserCard({item: {name,username, email, id}}) {
    return (
        <li className="card">
            <figure className="container_img">
                <img src={`https://picsum.photos/200/300?random=${id}`} alt="randon img"/>
            </figure>
                <div className='title'>
                   <h2>{name}</h2>
                   <p>@{username}</p>
                   <p>{email}</p>
                </div>
        </li>
    )

}