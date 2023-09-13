"use client"

import { useEffect, useState, lazy, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { userContext } from "../contexts/userContext"
import { widthContext } from "../contexts/widthContext"
import Loader from "./Loader"
import End from './End'
import add from '../firebase/add'

const S1 = lazy(() => import('./S1'))
const S2 = lazy(() => import('./S2')) 

export default function Home() {
  const router = useRouter()
  const [userData, setUData] = useState(null)
  const [width, setWidth] = useState(window.innerWidth)

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

  useEffect(() => { userData && sessionStorage.setItem('user-allowed', userData.username) }, [userData])

  window.addEventListener('resize', () => setWidth(window.innerWidth))
  
  return (
    <widthContext.Provider value={width}>
      <userContext.Provider value={userData}>
        <Suspense fallback={<Loader width="15%"/>}>
          <S1 />
          <S2 />
          <End />
        </Suspense>
     </userContext.Provider>
    </widthContext.Provider>
  )
}
