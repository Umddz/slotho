import { useState } from 'react'
export default function useWidth() {
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return width
}