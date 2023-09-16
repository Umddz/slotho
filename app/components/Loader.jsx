export default function Loader({ width }) {
    return (
        <div className="loader">
            <img src="/loader.png" alt="Loader"  style={{ 
            width: `calc(${width} + 6vh)`, 
        }}/>
        </div>
    )
}