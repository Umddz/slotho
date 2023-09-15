"use client"
import { useState } from 'react'
import Loader from './Loader'

export default function Server({ name, desc, servericon, postedBy, inviteLink }) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="server">
            <img
                src={servericon}
                alt={`${name}'s Icon`}
                onLoad={() => setLoaded(true)}
            />
            {loaded ? (
                <>
                    <h2>{name.toUpperCase()}</h2>
                    <p>{desc.length > 150 ? `${desc.slice(0, 150)}...` : desc}</p>
                    <h2>Posted By {postedBy.global_name}</h2>
                    <p>{postedBy.id}</p>
                    <button onClick={() => open(inviteLink)}>Join</button>
                </>
            ) : (
                <Loader width="30%" />
            )}
        </div>
    )
}
