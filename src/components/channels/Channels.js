import React, { useContext } from "react";
import ChannelContext from "../context/channels/channelContext";
/*
    {channels.map((channel) => (
        <li key={channel.id}>{channel.display_name}</li>
    ))}
*/
const Users = () => {
    const channelContext = useContext(ChannelContext);
    const { channels, loading } = channelContext;
    //console.log(channels);
    if (loading) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div style={channelStyle}>
                <ul>
                    {channels.map((channel) => (
                        <li key={channel.id}>{channel.display_name}</li>
                    ))}
                </ul>
            </div>
        );
    }
};

const channelStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

export default Users;