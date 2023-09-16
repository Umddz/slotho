import { useRouter } from 'next/navigation'
import Image from 'next/image'
export default function Logo() {
    const router = useRouter()
    return (
        <div className="logo" onClick={() => router.push('/')}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
    )
}