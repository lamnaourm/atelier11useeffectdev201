import React from 'react'

export default function User({user}) {
  return (
    <div className='user'>
        <h2>Name : {user.name}</h2>
        <p>Email : {user.email}</p>
        <p>Ville : {user.address.city} - Rue : {user.address.street}</p>
        <button>Details user</button>
    </div>
  )
}
