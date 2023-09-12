"use client" 

import { useEffect, useState, lazy, Suspense } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import UserInfo from './UserInfo'
import YourServers from './YourServers'
import Loader from './Loader'
import read from '../firebase/read'
import End from './End'

const AddServer = lazy(() => import('./AddServer'))

export default function Dashboard() {
    const [dashboard, setDashboard] = useState(null)
    const [addServer, setAddServer] = useState(false)
    const [user, setUser] = useState(sessionStorage.getItem('user-allowed'))

    const interval = setInterval(() => user === null ? update() : clearInterval(interval), 200)

    useEffect(() => {
        read('users', user).then(res => setDashboard(res))
    }, [user])

    const update = () => setUser(sessionStorage.getItem('user-allowed'))

    return (
        <>
            {!addServer ? 
            <div className="dashboard">
                { user ? dashboard && dashboard !== "User not found!" ? (
                    <>
                        <Logo />
                        <h1 style={{ marginTop: 100 }}>Dashboard</h1>
                        <img src="sloth2.png" className="sloth" />
                        <h2>THINGS WE KNOW ABOUT YOU</h2>
                        <UserInfo dashboard={dashboard} />
                        <YourServers setAddServer={() => setAddServer(true)} dashboard={dashboard}/>
                        <End />
                    </>
                ) : (
                    <h2>{ dashboard }</h2>
                ) : <h2>:( <Link href="/">Log In</Link> <Link href="/">Go Home</Link></h2>
            }
            </div> : 
            <Suspense fallback={<Loader width="15%"/>}>
                 <AddServer setAddServer={() => setAddServer(false)} dashboard={dashboard}/>
            </Suspense>
        }
            { !dashboard && <Loader width="15%"/>}
        </>
    )
}
