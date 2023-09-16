"use client"

import { useEffect, useState, useRef } from 'react'
import Loader from './Loader'
import readAll from '../firebase/readAll'
import renderServers from '../functions/renderServers'
import { useRouter}  from 'next/navigation'

export default function S2( ) {  
    const [servers, setServers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const router = useRouter()
    const ref = useRef(null)

    useEffect(() => {
        readAll('servers').then(res => setServers(res.slice(0, 6)))
    }, [])

    useEffect(() => { Array.from(ref.current.childNodes).length > 0 && setLoaded(true) })

    return (
        <div className="s2">
            <h1>Discord Servers</h1>
            <div className="servers-container" ref={ref}>
                { renderServers(servers) }
            </div>
            <button onClick={() => router.push('/servers')}>See More Servers</button>
            { !loaded && <Loader width="12%" />}
        </div>
    )
}