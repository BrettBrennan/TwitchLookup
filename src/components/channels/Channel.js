import React from 'react'

const Channel = (channel) => {
    const {
        broadcaster_language, 
        display_name, 
        game_id, 
        id, 
        is_live, 
        thumbnail_url, 
        title
    } = channel.channel;
    return (
        <div className="channel_card">
            <h2>{display_name}</h2>
            <h3>{title}</h3>
            <img src={thumbnail_url} width='150px' height='150px'/>        
            <h4>{game_id}</h4>
        </div>
    )
}

export default Channel
