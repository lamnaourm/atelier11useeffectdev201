import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function User({ user, active, handleClick }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (user.id === active) {
            const getPosts = async () => {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + active);
                return res.data;
            }

            getPosts().then(posts => setPosts(posts))
        }
    }, [active])
    return (
        <div className='user'>
            <h2>Name : {user.name}</h2>
            <p>Email : {user.email}</p>
            <p>Ville : {user.address.city} - Rue : {user.address.street}</p>
            <button onClick={() => handleClick(user.id)} disabled={active === user.id}>Details user</button>

            {
                user.id === active && <div className='posts'>
                    <h4>nombre de posts : {posts.length}</h4>
                    {
                        posts.map(p =>
                            <div className='post'>
                                <h5>{p.title}</h5>
                                <p>{p.body}</p>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}
