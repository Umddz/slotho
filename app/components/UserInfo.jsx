import { userContext } from "../contexts/userContext"
import { useContext } from 'react'

export default function UserInfo() {
    const userData = useContext(userContext)
    return (
        <div className="user-info">
            <div>
                <h2>USERNAME : { userData.global_name }</h2>
                <h2>ID : { userData.id }</h2>
                <h2>TYPE : { userData.premium_type }</h2>
                <h2>FLAGS: { userData.flags }</h2>
            </div>
            <img src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.jpg`} alt={userData.username} />     
        </div>
    )
}