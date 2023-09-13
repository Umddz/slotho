export default function UserInfo({ dashboard }) {
    return (
        <div className="user-info">
            <div>
                <h2>USERNAME : { dashboard.global_name }</h2>
                <h2>ID : { dashboard.id }</h2>
                <h2>TYPE : { dashboard.premium_type }</h2>
                <h2>FLAGS: { dashboard.flags }</h2>
            </div>
            <img src={`https://cdn.discordapp.com/avatars/${dashboard.id}/${dashboard.avatar}.jpg`} alt={dashboard.username} />     
        </div>
    )
}