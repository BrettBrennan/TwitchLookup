import React, { useContext } from "react";
import ChannelContext from "../context/channels/channelContext";
import Channel from './Channel';
const Users = () => {
    const channelContext = useContext(ChannelContext);
    const { channels, loading } = channelContext;
    if (loading) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div className="channel-list">
                {channels.map((channel) => (
                    <Channel key={channel.id} channel={channel} />
                ))}
            </div>
        );
    }
};

export default Users;