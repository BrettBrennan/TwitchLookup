import React from 'react'

const Channel = (channel, selected) => {
    const {
        broadcaster_language, 
        display_name, 
        game_id, 
        id, 
        is_live, 
        thumbnail_url, 
        title
    } = channel.channel;
    var cardClass = `channel_card ${selected === id && 'selected'}`
    return (
        <div className={cardClass}>
            <h2>{display_name}</h2>
            <h3>{title}</h3>
            <img src={thumbnail_url} width='150px' height='150px'/>        
            <h4>{game_id}</h4>
        </div>
    )
}

export default Channel
