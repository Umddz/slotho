"use client"
import { useState, useEffect } from 'react'
import readAll from "../firebase/readAll"
import Server from './Server'

export default function YourServers({ setAddServer, dashboard }) {
    const [yourServers, setServers] = useState(null)

    useEffect(() => {
        readAll('servers').then(res => setServers(res.map(server => server.postedBy.username === dashboard.username && server)))
    }, [])

    function renderServers() {
        if (yourServers) {
            return yourServers.map((server, index) => 
        <Server 
            name={server.name} 
            desc={server.description} 
            servericon={server.image}
            key={index} 
            postedBy={server.postedBy}
            inviteLink={server.inviteLink}
        />)
        } else {
            return (
            <>
                <h2>You currently have no servers!</h2>
                <button onClick={() => setAddServer()}>Add Server</button>
            </>
        )
        }
    }

    return (
        <div className="your-servers">
            <h1>Servers</h1>
            <div className="servers-container">
                {renderServers() ? renderServers() : <Loader width="15%" />}
            </div>
            {yourServers && <button onClick={() => setAddServer()}>Add More Servers</button>}
        </div> 
    )
}