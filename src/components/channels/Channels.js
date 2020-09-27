import React, { useContext, useEffect, useState } from "react";
import ChannelContext from "../context/channels/channelContext";
import Channel from './Channel';
const Users = () => {
    const channelContext = useContext(ChannelContext);
    const { channels, getPopularChannels, loading } = channelContext;
    const [defaultChannelsLoaded, setDefaultChannelsLoaded] = useState(false);
    useEffect(() => {
        if (!defaultChannelsLoaded){
            getPopularChannels();       
            setDefaultChannelsLoaded(true);
        } 
        // eslint-disable-next-line
    }, []);
    
    if (loading) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div className="home-container">
                <div className="channel-list">
                    {channels.map((channel) => (
                        <Channel key={channel.id} channel={channel}/>
                    ))}
                </div>
                <button onClick={() => window.scroll(0, 0)}>Back to Top</button>
            </div>
        );
    }
};

export default Users;