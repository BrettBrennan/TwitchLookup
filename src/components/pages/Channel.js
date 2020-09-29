import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ChannelContext from "../context/channels/channelContext";
import Spinner from '../layouts/Spinner';
import Error from '../layouts/Error';

const Channel = () => {
    const channelContext = useContext(ChannelContext);
    const {loading, error, channel, getChannel, game, user} = channelContext;
    const location = useLocation();
    const userID = location.pathname.replace('/Channel/', '');
    useEffect(() => {
        getChannel(userID);
        // eslint-disable-next-line
    }, []);
    if (loading) return <Spinner />
    if (error) return <Error error={error} />
    if (!channel.data) return <h1>Waiting for channel data...</h1>;
    console.log(channel.data[0]);
    const { 
        user_name,
        game_name,
        broadcaster_name,
        type,
        thumbnail_url,
        viewer_count,
        title
    } = channel.data.length >= 1 ? channel.data[0] : channel.data;

    const image_width = 1920;
    const image_height = 1080;

    let parsedImagePath = thumbnail_url ? thumbnail_url.replace('{width}', `${image_width}`).replace('{height}', `${image_height}`) : '';

    const getThumbnail = () => {
        if (thumbnail_url) {
            return <div style={{backgroundImage: `url(${parsedImagePath})`}} className="channel-profile-image"></div>
        }
        if (user.data){
            return <div style={{backgroundImage: `url(${user.data[0].profile_image_url})`}} className="channel-profile-image"></div>
        }
    }
    const getLiveInfo = () => {
        if (type === "live"){
            return (
                <p><span style={{color: 'red'}}>Live</span> with <span style={{color: 'red'}}>{viewer_count} </span>viewers!</p>
            );
        }
        if (user.data){
            return <p>{user.data[0].view_count} views</p>
        }
    }
    const getGameInfo = () => {
        let url;
        if (game.data)
            url = `https://www.twitch.tv/directory/game/${game.data[0].name}`;
        else
            url = `https://www.twitch.tv/directory/game/${game_name}`;

        if (game.data){
            return <h3>Playing <a href={url}>{game.data[0].name}</a></h3>
        }
        if (game_name){
            return <h3><a href={url}>{game_name}</a></h3>
        }
    }
    const getDescription = () => {
        if (user.data) {
            return <p>{user.data[0].description}</p>
        }
    }
    const url = `http://twitch.tv/${user_name ? user_name : broadcaster_name}`;
    return (
        <div className="channel-profile">
            <h2><a href={url}>{user_name ? user_name : broadcaster_name}</a></h2>
            <h4>{title}</h4>
            {getThumbnail()}
            {getGameInfo()}
            {getLiveInfo()}
            {getDescription()}
        </div>
    )
}

export default Channel
