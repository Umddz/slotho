export default function Input({ label, placeholder }) {
    return (
        <div className="input">
            <h2>{ label }</h2>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}