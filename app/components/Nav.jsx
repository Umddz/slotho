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
                <h3 onClick={() => open('https://discord.gg/Zwrc9RqxEr')} style={{ marginLeft: 'auto'}}>Discord</h3>
                <h3 onClick={() => router.push('/')}>Home</h3>
                <h3 onClick={() => router.push('/dashboard')}>Dashboard</h3>
                <h3 onClick={() => userData ? router.push('/dashboard') : document.querySelector('.nav button').click()}>Add Server</h3>
                <button
                    disabled={userData ? true : false}
                    style={{ marginRight: 30 }}
                    onClick={() => open('https://discord.com/api/oauth2/authorize?client_id=1147583172821909556&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token&scope=identify')}
                >
                    { !userData ? "Log In" : "Logged In"}
                </button>
            </> : 
            userData && 
            <>
                <img 
                src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.jpg`} 
                alt={userData.username} 
                style={{ marginLeft: 'auto'}} 
            />
                <h3 onClick={() => router.push('/dashboard')}>{ userData.global_name }</h3>
            </>
            }
        </div>
    )
}
