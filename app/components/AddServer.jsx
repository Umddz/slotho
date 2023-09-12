"use client"

import Input from "@/app/components/Input"
import Logo from "@/app/components/Logo"
import { useRef, useState, useEffect } from 'react'
import End from "./End"
import add from "../firebase/add"

export default function AddServer({ setAddServer, dashboard }) {
    const ref = useRef(null)
    const [error, setError] = useState(null)
    const [image, setImage] = useState('')

    useEffect(() => { if (error) setTimeout(() => setError(null), 1000) }, [error])

    function addServer() {
        const inputs = Array.from(document.querySelectorAll('.add-server input'))
        const [description, name, inviteLink] = inputs.map(input => input.value)

        switch (true) {
            case description === '' || name === '' || inviteLink === '':
                setError('Fill all the fields.')
                break
            case description.length < 40:
                setError('Description should be larger than 40.')
                break
            case description.split(' ').length < 10:
                setError('The description should have more words.')
                break
            case name.length > 25:
                setError('Name is too long.')
                break
            case !inviteLink.includes('https://discord.gg/'):
                setError('Are you sure you put an invite link?')
                break
            case !image:
                setError('Where is your server icon?')
                break 
            default:
                const serverData = { name, description, inviteLink, postedBy: dashboard, image }
                add('servers', serverData.name, serverData)
                break
        }
}


    function handleImageUpload(e) {
        const file = e.target.files[0]

        Array.from(ref.current.childNodes)[0].src = URL.createObjectURL(file)
        ref.current.style.display = 'flex'

        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.addEventListener('load', () => setImage(reader.result))

}


    return (
        <div className="add-server">
            <Logo />
            <img src="sloth2.png" className="sloth" />
            <h1 style={{ marginTop: 100 }}>Add Server</h1>
            <div className="input-container">
                <h2>Please Fill in these.</h2>
                <h2>Description</h2>
                <input type="text" className="desc-in" placeholder="Write a description for your server..." />
                <h3>The description should be larger than 40 words and smaller than 150 words.</h3>
                <Input label="Server Name: " placeholder="Enter the server name..."/>
                <Input label="Invite Link: " placeholder="Enter the invite link..."/>
                <div className="choose-image">
                    <h2>Server Icon: </h2>
                    <input type="file" onChange={handleImageUpload} accept="image/*"/>
                </div>
                <div className="display-image-container" ref={ref}>
                     <img />
                     <h2>Your Server Icon</h2>
                </div>
                    <p style={{ margin: 20 }}>{ error }</p>
                <div>
                    <button onClick={addServer}>Add server</button>
                    <button onClick={() => setAddServer()}>Go back</button>
                </div>
            </div>
            <End />
        </div>
    )
}