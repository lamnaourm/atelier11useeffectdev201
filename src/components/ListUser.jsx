import React, { useState } from 'react'
import User from './User'

export default function ListUser({ users }) {

    const [activeId, setActiveId] = useState(0);

    const changeId = (id) => {
        setActiveId(id);
    }

    return (
        <div className='list'>
            <h1>Nombre d'utilisateurs : {users.length}</h1>
            {users.map(u =>
                <User key={u.id} user={u} active={activeId} handleClick={changeId}/>
            )}
        </div>
    )
}
