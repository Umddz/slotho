"use client"
import { useState, useEffect, useRef, useContext } from 'react'
import readAll from "../firebase/readAll"
import Loader from './Loader'
import renderServers from '../functions/renderServers'
import { userContext } from '../contexts/userContext'

export default function YourServers({ setAddServer }) {
    const [yourServers, setServers] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const ref = useRef(null)
    const userData = useContext(userContext)

    useEffect(() => { 
        const childArr = Array.from(ref.current.childNodes)
        childArr.length > 0 && setLoaded(true)

        yourServers === 'No servers!' && setLoaded(true) 
    })

    useEffect(() => {
        readAll('servers').then(res => {
            const Yservers = res.map(server => server.postedBy.username === userData.username && server)
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