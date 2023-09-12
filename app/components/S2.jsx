"use client"

import { useEffect, useState } from 'react'
import Server from './Server'
import Loader from './Loader'
import readAll from '../firebase/readAll'
export default function S2( ) {  
    const [servers, setServers] = useState([])
    useEffect(() => {
        readAll('servers').then(res => setServers(res))
    }, [])

    function renderServers() {
        return servers.map((server, index) => 
        <Server 
            name={server.name} 
            desc={server.description} 
            servericon={server.image} 
            key={index} 
            postedBy={server.postedBy}
            inviteLink={server.inviteLink}
        />)
    }

    return (
        <div className="s2">
            <h1>Servers</h1>
            <div className="servers-container">
                {renderServers() ? renderServers() : <Loader width="15%" />}
            </div>
        </div>
    )
}