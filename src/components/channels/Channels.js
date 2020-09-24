import React, { useContext } from "react";
import ChannelContext from "../context/channels/channelContext";
import Channel from './Channel';
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
                {channels.map((channel) => (
                    <Channel key={channel.id} channel={channel}/>
                ))}
            </div>
        );
    }
};

const channelStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gridGap: "1rem",
    padding: "25px"
};

export default Users;