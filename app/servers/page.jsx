"use client"
import renderServers from '../functions/renderServers'
import readAll from '../firebase/readAll'
import Loader from '../components/Loader'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import End from '../components/End'

export default function Servers() {
    const [servers, setServers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const searchInput = useRef(null)
    const router = useRouter()

    useEffect(() => {
        readAll('servers').then(servers => { setServers(servers); setLoaded(true) })   
    })
    return (
        <div className="servers">
            <h1>Discord Servers</h1>
            <p>Search the server listing for a discord server.</p>
            <input type="text" placeholder="Search...." ref={searchInput}/>
            <button onClick={() => searchInput.current.value && router.push(`/servers/${searchInput.current.value}`)}>Search</button>
            <div className="servers-container">
                { renderServers(servers) }
            </div>
            { !loaded && <Loader width="20%" />}
            <End />
        </div>
    )
}