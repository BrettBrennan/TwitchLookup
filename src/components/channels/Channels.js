import React, { useContext } from "react";
import ChannelContext from "../context/channels/channelContext";
import Channel from './Channel';
const Users = () => {
    const channelContext = useContext(ChannelContext);
    const { channels, loading } = channelContext;
    var selected = null;

    if (loading) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div className="channel-list">
                {channels.map((channel) => (
                    <Channel key={channel.id} channel={channel} selected={selected} />
                ))}
            </div>
        );
    }
};

export default Users;