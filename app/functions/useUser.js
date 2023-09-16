import { useState } from 'react'
export default function useUser() {
    const [user, setUser] = useState(sessionStorage.getItem('user-allowed'))
    const interval = setInterval(() => user === null ? update() : clearInterval(interval), 200)

    const update = () => setUser(sessionStorage.getItem('user-allowed'))

    return user
}