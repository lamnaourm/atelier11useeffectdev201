import React from 'react'
import User from './User'

export default function ListUser({ users }) {
    return (
        <div className='list'>
            {users.map(u =>
                <User key={u.id} user={u}/>
            )}
        </div>
    )
}
