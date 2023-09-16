"use client"
import { useRouter } from 'next/navigation' 
import { useContext } from 'react'
import Logo from "./Logo"
import useWidth from '../functions/useWidth'
import { userContext } from '../contexts/userContext'

export default function Nav() {
    const router = useRouter()   
    const userData = useContext(userContext)
    const width = useWidth()

    return (
        <div className="nav">
            <Logo />
            {width > 750 ?
            <>
                <h3 onClick={() => router.push('/')} style={{ marginLeft: 'auto'}}>Home</h3>
                <h3 onClick={() => router.push('/servers')}>Servers</h3>
                <h3 onClick={() => userData ? router.push('/dashboard') : document.querySelector('.nav button').click()}>Add Server</h3>
            </> : 
            userData && 
            <h3 onClick={() => router.push('/dashboard')} style={{ marginLeft: 'auto' }}>{ userData.global_name }</h3>
            }
            <button
                    disabled={userData ? true : false}
                    style={{ marginRight: 30, marginLeft: width < 750 && !userData && 'auto' }}
                    onClick={() => open('https://discord.com/api/oauth2/authorize?client_id=1147583172821909556&redirect_uri=https%3A%2F%2Fslotho.vercel.app%2F&response_type=token&scope=identify')}
                >
                    { !userData ? "Log In" : "Logged In"}
            </button>
        </div>
    )
}
