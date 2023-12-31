"use client"

import End from '@/app/components/End'
import Loader from '@/app/components/Loader'
import readAll from '@/app/firebase/readAll'
import renderServers from '@/app/functions/renderServers'
import { useEffect, useState, useRef } from 'react'

export default function Search({ params }) {
    const [servers, setServers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        readAll('servers').then(res => {
            const filteredServers = res.filter(server => server.name.toLowerCase().includes(params.search))

            if (filteredServers.length !== 0) setServers(filteredServers)
            else setServers('No Servers match your search!')
        })
    }, [])

    useEffect(() => { Array.from(ref.current.childNodes).length > 0 && setLoaded(true) })

    return (
        <div className="search">
            <h1>Search</h1>
            <div className="params">
                <h2>Showing results for "{params.search}"</h2>
            </div>
            <div className="servers-container" style={{ margin: 20 }} ref={ref}>
                { servers !== 'No Servers match your search!' ? renderServers(servers) 
                : <h2>{ servers }</h2>}
            </div>
                { !loaded && <Loader width="15%" />}
            <End />
        </div>
    )
}