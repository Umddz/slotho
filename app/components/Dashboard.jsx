"use client" 

import { useState, lazy, Suspense, useContext } from 'react'
import UserInfo from './UserInfo'
import YourServers from './YourServers'
import Loader from './Loader'
import End from './End'
import { userContext } from '../contexts/userContext'
import Link from 'next/link'

const AddServer = lazy(() => import('./AddServer'))

export default function Dashboard() {
    const userData = useContext(userContext)
    const [addServer, setAddServer] = useState(false)

    return (
        <>
            {!addServer ? 
            <div className="dashboard">
                { userData ? (
                    <>
                        <h1 style={{ marginTop: 100 }}>Dashboard</h1>
                        <img src="sloth2.png" className="sloth" />
                        <h2>THINGS WE KNOW ABOUT YOU</h2>
                        <UserInfo />
                        <YourServers setAddServer={() => setAddServer(true)}/>
                        <End />
                    </>
                ) : 
                <>
                    <h2>It'll never load, cause you didnt log in!</h2>
                    <h2>The sloth is gonna be tired of rotating, go back <Link href="/">Home</Link></h2>
                </>
            }
            </div> : 
            <Suspense fallback={<Loader width="15%" center={true}/>}>
                 <AddServer setAddServer={() => { setAddServer(false)}} />
            </Suspense>
        }
            { !userData && <Loader width="15%" center={true}/>}
        </>
    )
}
