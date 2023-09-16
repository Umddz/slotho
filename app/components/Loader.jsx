import Image from 'next/image'
export default function Loader({ width, center }) {
    return (
        <div className="loader" style={{ 
            width, 
            left: center ? '50%' : 0, 
            transform: center && 'translateX(-50%)'
        }}>
            <Image src="/loader.png" layout={'fill'} objectFit={'contain'}/>
        </div>
    )
}