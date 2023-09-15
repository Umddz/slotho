import { userContext } from "../contexts/userContext"
import { useContext } from 'react' 
import { useRouter } from 'next/navigation'
import Loader from "./Loader"
export default function DataBox() {
    const userData = useContext(userContext)
    const router = useRouter()
    return (
        <div className="user-data-container">
                {userData && 
                <>
                    {userData.loading !== "loading..." ? 
                    <>
                        <div>
                        <img src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.jpg`} alt={userData.username} />
                        <h3>{userData.global_name}</h3>
                        </div>
                        <div>
                            <h3>{userData.id}</h3>
                        </div>
                        <h3>Locale: {userData.locale}</h3>
                        <button onClick={() => router.push(`/dashboard`)}>Dashboard</button>
                    </> : 
                    <Loader width="30%"/>
                    }
                </> 
                }
            {!userData && <h3>You are not logged in!</h3>}
        </div>
    )
}