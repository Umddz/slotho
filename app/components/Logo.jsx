import Image from 'next/image'
export default function Logo() {
    return (
        <div className="logo">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
    )
}