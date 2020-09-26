import React from 'react'
import { Link } from 'react-router-dom';
const Channel = (channel) => {
    const {
        // broadcaster_language, 
        // game_id, 
        // is_live, 
        // title,
        id, 
        display_name, 
        thumbnail_url
    } = channel.channel;
    const pathname = `/Channel/${id}`;
    return (
        <Link to={pathname} className="channel-card">
            <img src={thumbnail_url} alt={display_name} className="channel-card-img"/>        
            <h2>{display_name}</h2>
        </Link>
    )
}

export default Channel
