"use client"
import './styles/globals.css'
import './styles/F1.css'
import './styles/F2.css'
import './styles/F3.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import add from './firebase/add'
import { userContext } from './contexts/userContext'
import Nav from './components/Nav'

export const metadata = {
  title: 'Slotho',
  description: 'A Discord Server Listing.',
}

export default function RootLayout({ children }) {
  const [userData, setUData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1))
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')]

    
    if (!accessToken) router.push('/')
    else {
      setUData({ loading: 'loading...' })
      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        },
      })
        .then(res => res.json())
        .then(data => setUData({...data, loading: 'loaded!'}))
        .catch(console.error)
    }   
  }, [])

  useEffect(() => {
      userData && userData.loading === 'loaded!' && add('users', userData.username, userData)
  }, [userData])
  
  return (
      <html lang="en">
        <body>
          <userContext.Provider value={userData}>
            <Nav />
            {children}
          </userContext.Provider>
        </body>
      </html>
  )
}

