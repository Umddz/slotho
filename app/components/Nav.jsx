import { userContext } from "../contexts/userContext"
import { widthContext } from "../contexts/widthContext"
import Logo from "./Logo"
import { useRouter } from 'next/navigation' 
import { useContext } from 'react'

export default function Nav() {
    const userData = useContext(userContext)
    const width = useContext(widthContext)
    const router = useRouter()
    return (
        <div className="nav">
            <Logo />
            {userData && width < 1000 && <h2>{userData.global_name}</h2>}
            <h3 onClick={() => open('https://discord.gg/Zwrc9RqxEr')}>Discord</h3>
            <h3 onClick={() => userData ? router.push('/dashboard') : document.querySelector('.nav button').click()}>Add Server</h3>
            <button
                disabled={userData ? true : false}
                style={{ marginLeft: 'auto' }}
                onClick={() => open('https://discord.com/api/oauth2/authorize?client_id=1147583172821909556&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token&scope=identify')}
            >
                {!userData ? "Log In" : "Logged In!"}
            </button>
        </div>
    )
}
