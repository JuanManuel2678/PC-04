import React from 'react'

export default function UserCard({item: {name,username, email, id}}) {
    return (
        <li className="card">
            <figure className="container_img">
                <img src={`https://unavatar.io/${username}/`} alt="randon img"/>
            </figure>
                <div className='title'>
                   <h2>{name}</h2>
                   <p>@{username}</p>
                   <p>{email}</p>
                </div>
        </li>
    )
}


// https://picsum.photos/id/5${id}/200/300