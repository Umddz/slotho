"use client"
import Loader from '@/app/components/Loader'
import readAll from '@/app/firebase/readAll'
import renderServers from '@/app/functions/renderServers'
import { useEffect, useState, useRef } from 'react'
export default function Partners() {
    const [servers, setServers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        readAll('servers').then(res => {
            const filteredServers = res.filter(server => server.partner === true)

            if (filteredServers.length !== 0) setServers(filteredServers)
            else setServers('No Partners:(')
        })
    }, [])

    useEffect(() => { Array.from(ref.current.childNodes).length > 0 && setLoaded(true) })

    return (
        <div className="partners">
            <h1>Discord Partners</h1>
            <p>How to partner with us? Join our discord server and make a ticket to partner!</p>
            <div className="servers-container" ref={ref} style={{ margin: 20 }}>
                { servers !== 'No Partners:(' ? renderServers(servers) 
                : <h2>{ servers }</h2>}
            </div>
                { !loaded && <Loader width="10%" />}
        </div>
    )
}