"use client" 

import { useState, lazy, Suspense, useContext } from 'react'
import UserInfo from './UserInfo'
import YourServers from './YourServers'
import Loader from './Loader'
import End from './End'
import { userContext } from '../contexts/userContext'

const AddServer = lazy(() => import('./AddServer'))

export default function Dashboard() {
    const userData = useContext(userContext)
    const [addServer, setAddServer] = useState(false)

    return (
        <>
            {!addServer ? 
            <div className="dashboard">
                { userData && userData !== "User not found!" ? (
                    <>
                        <h1 style={{ marginTop: 100 }}>Dashboard</h1>
                        <img src="sloth2.png" className="sloth" />
                        <h2>THINGS WE KNOW ABOUT YOU</h2>
                        <UserInfo />
                        <YourServers setAddServer={() => setAddServer(true)}/>
                        <End />
                    </>
                ) : (
                    <h2>Not Logged In!</h2>
                ) 
            }
            </div> : 
            <Suspense fallback={<Loader width="15%"/>}>
                 <AddServer setAddServer={() => { setAddServer(false)}} />
            </Suspense>
        }
            { !userData && <Loader width="15%"/>}
        </>
    )
}
