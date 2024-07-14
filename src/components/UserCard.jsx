import React from 'react'

export default function UserCard({item: {name, username, email, telefono, paguina, compañia, direccion }}) {
    return (
        <li className="card">
            <div>
            <figure className="container_img">
                <img src={`https://unavatar.io/${username}/`} alt="randon img"/>
            </figure>
                <div className='title'>
                   <h2>{name}</h2>
                   <p>@{username}</p>
                   <p>{email}</p>
                </div>
            </div>

            <div className='data_adicional'>

            <div className='title'>
                <h2>Contacto</h2> 
                <p> Tlf: {telefono}</p>
                <p> contact: {paguina}</p>
                <p>Compañia: {compañia.name}</p>
            </div>
            <div className='title'>
                <h2>Direccion</h2>
                <p>city: {direccion.city}</p>
                <p>calle: {direccion.street}</p>
                <p>Casa: {direccion.suite}</p>
                <p>Codigo Postal: {direccion.zipcode}</p>
            </div>
            </div>

        </li>
    )
}


// https://picsum.photos/id/5${id}/200/300