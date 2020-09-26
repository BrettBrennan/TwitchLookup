import React from 'react'
import { Link } from 'react-router-dom';
const Channel = (channel) => {
    const {
        id, 
        user_id,
        display_name,
        user_name, 
        thumbnail_url,
        viewer_count
    } = channel.channel;
    const pathname = `/Channel/${user_id || id}`;
    const image_width = 1920 / 8;
    const image_height = 1080 / 8;
    let parsedImagePath = thumbnail_url.replace('{width}', `${image_width}`).replace('{height}', `${image_height}`);

    const getLiveCount = () => {
        if (!viewer_count) return;
        return <h3>Live for {viewer_count} viewers</h3>
    }

    return (
        <Link to={pathname} className="channel-card">
            <img src={parsedImagePath} alt={display_name || user_name} className="channel-card-img"/>        
            <h2>{display_name || user_name}</h2>
            {getLiveCount()}
        </Link>
    )
}

export default Channel
