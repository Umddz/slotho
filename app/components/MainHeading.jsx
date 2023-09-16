import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useContext, useRef } from 'react' 
import { userContext } from '../contexts/userContext'
import useWidth from '../functions/useWidth'
import Image from 'next/image'

export default function MainHeading() {
    const router = useRouter()
    const width = useWidth()
    const userData = useContext(userContext)
    const searchInput = useRef(null)
    return (
        <>
            <h1 style={{ marginTop: 70 }}>Slotho</h1>
            <p>Slotho is a discord server listing dedicated to help server owners and people get together!</p>
            <div>
                <input type="text" placeholder="Search...." ref={searchInput}/>
                <button onClick={() => searchInput.current.value && router.push(`/servers/${searchInput.current.value}`)}>Search</button>
            </div>
            <h3>Server Owner? <button onClick={() => userData ? router.push('/dashboard') : document.querySelector('.nav button').click()}>Add your server</button></h3>
            
            <img src="/sloth.png" alt="Sloth" />
            <Image src="/discord.svg" alt="" className="discord" width={200} height={200}/>
            
            {width < 1000 && userData && <div className="user-con-m">
                <h2>Go to the <Link href={`/dashboard`}>Dashboard</Link></h2>
            </div>}
        </>
    )
}