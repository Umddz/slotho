export default function Loader({ width }) {
    return (
        <div className="loader">
            <img src="loader.png" style={{ width }}/>
            <h2>Loading...</h2>
        </div>
    )
}