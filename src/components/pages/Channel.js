import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ChannelContext from "../context/channels/channelContext";
import Spinner from '../layouts/Spinner';

const Channel = () => {
    const channelContext = useContext(ChannelContext);
    const {loading, channel, getChannel} = channelContext;
    const location = useLocation();
    const userID = location.pathname.replace('/Channel/', '');
    useEffect(() => {
        getChannel(userID);
        // eslint-disable-next-line
    }, []);
    if (loading) return <Spinner />
    if (!channel.data) return <h1>Waiting for channel data...</h1>;
    const { 
        broadcaster_name, 
        //broadcaster_language, 
        game_name,  
        title
    } = channel.data[0];
    return (
        <div className="channel-profile">
            <h1>{broadcaster_name}</h1>
            <h2>{title}</h2>
            <h3>{game_name}</h3>
        </div>
    )
}

export default Channel
