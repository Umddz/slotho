import Server from "../components/Server";

export default function renderServers(servers) {
        return servers.map((server, index) => 
            <Server 
                name={server.name} 
                desc={server.description} 
                servericon={server.image} 
                key={index} 
                postedBy={server.postedBy}
                inviteLink={server.inviteLink}
            />)
    }