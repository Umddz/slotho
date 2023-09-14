"use client"
import { useState, useEffect, useRef } from 'react'
import readAll from "../firebase/readAll"
import Server from './Server'
import Loader from './Loader'
import renderServers from '../functions/renderServers'

export default function YourServers({ setAddServer, dashboard }) {
    const [yourServers, setServers] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const ref = useRef(null)

    useEffect(() => { 
        const childArr = Array.from(ref.current.childNodes)
        childArr.length > 0 && setLoaded(true)

        yourServers === 'No servers!' && setLoaded(true) 
    })

    useEffect(() => {
        readAll('servers').then(res => {
            const Yservers = res.map(server => server.postedBy.username === dashboard.username && server)
            !Yservers.every(server => server === false) ? setServers(Yservers.filter(server => server !== false)) : setServers('No servers!')
        }
        )
    }, [])

    return (
        <div className="your-servers">
            <h1>Servers</h1>
            <div className="servers-container" ref={ref}>
                { yourServers && yourServers !== 'No servers!' && renderServers(yourServers) }
            </div>
            { !loaded && <Loader width="15%" />}
            { yourServers === 'No servers!' &&
                <>
                    <h2>You currently have no servers!</h2>
                    <button onClick={() => setAddServer()}>Add Server</button>
                </>
            }
            { yourServers !== 'No servers!' && <button onClick={() => setAddServer()}>Add More Servers</button>}
        </div> 
    )
}