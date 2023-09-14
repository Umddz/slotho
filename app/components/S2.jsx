"use client"

import { useEffect, useState, useRef } from 'react'
import Server from './Server'
import Loader from './Loader'
import readAll from '../firebase/readAll'
import renderServers from '../functions/renderServers'

export default function S2( ) {  
    const [servers, setServers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        readAll('servers').then(res => setServers(res))
    }, [])

    useEffect(() => { Array.from(ref.current.childNodes).length > 0 && setLoaded(true) })

    return (
        <div className="s2">
            <h1>Servers</h1>
            <div className="servers-container" ref={ref}>
                { renderServers(servers) }
            </div>
                { !loaded && <Loader width="15%" />}
        </div>
    )
}