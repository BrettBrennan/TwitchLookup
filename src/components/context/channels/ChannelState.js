import React, { useReducer } from "react";
import axios from "axios";
import ChannelContext from "./channelContext";
import ChannelReducer from "./channelReducer";
import {
    SEARCH_CHANNELS,
    CLEAR_CHANNELS,
    SET_LOADING,
    GET_CHANNEL,
    GET_GAME,
    GET_USER
} from "../types";
let clientID;
let clientSecret;
if (process.env.NODE_ENV !== "production") {
    clientID = process.env.REACT_APP_CLIENT_ID;
    clientSecret = process.env.REACT_APP_CLIENT_TOKEN;
} else {
    clientID = process.env.CLIENT_ID;
    clientSecret = process.env.CLIENT_TOKEN;
}
const ChannelState = (props) => {
    const initialState = {
        channels: [],
        channel: {},
        game: {},
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ChannelReducer, initialState);

    const setLoading = () => dispatch({ type: SET_LOADING});

    // Get Popular Channels
    const getPopularChannels = async () => {
        console.log('Getting Top Channels');
        setLoading();
        const inst = axios.create({
            baseURL: 'https://api.twitch.tv/helix/',
            headers: {
                'Authorization': `Bearer ${clientSecret}`,
                'client-id': clientID
            }
        })
        const res = await inst.get(`streams?first=30`);
        dispatch({
            type: SEARCH_CHANNELS,
            payload: res.data.data,
        });
    }
    const getUser = async (id) => {
        setLoading();
        const res = await axios.get(
            `https://api.twitch.tv/helix/users?id=${id}`, 
            {
                headers: {
                    'authorization': `Bearer ${clientSecret}`,
                    'client-id': clientID
                }
            }
        );
        dispatch({
            type: GET_USER,
            payload: res.data,
        });     
    }
    const getGame = async (id) => {
        setLoading();
        const res = await axios.get(
            `https://api.twitch.tv/helix/games?id=${id}`, 
            {
                headers: {
                    'authorization': `Bearer ${clientSecret}`,
                    'client-id': clientID
                }
            }
        );
        dispatch({
            type: GET_GAME,
            payload: res.data,
        });
    }
    // Search Channels
    const searchChannels = async (text) => {
        console.log('Searching Channels: ' + text);
        setLoading();
        const inst = axios.create({
            baseURL: 'https://api.twitch.tv/helix/',
            headers: {
                'Authorization': `Bearer ${clientSecret}`,
                'client-id': clientID
            }
        })
        const res = await inst.get(`search/channels?query=${text}&first=100`);
        dispatch({
            type: SEARCH_CHANNELS,
            payload: res.data.data,
        });
    };
    // Get Channel
    const getChannel = async (broadcaster_id) => {
        setLoading();
        var res = await axios.get(
            `https://api.twitch.tv/helix/streams?user_id=${broadcaster_id}&first=1`, 
            {
                headers: {
                    'authorization': `Bearer ${clientSecret}`,
                    'client-id': clientID
                }
            }
        );
        if (res.data.data.length > 0)
            getGame(res.data.data[0].game_id);
        else{
            res = await axios.get(
                `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`, 
                {
                    headers: {
                        'authorization': `Bearer ${clientSecret}`,
                        'client-id': clientID
                    }
                });
            getUser(broadcaster_id);
        }
        
        dispatch({
            type: GET_CHANNEL,
            payload: res.data,
        });
    };
    
    const clearChannels = () => dispatch({ type: CLEAR_CHANNELS });
    return (
        <ChannelContext.Provider
            value={{
                channels: state.channels,
                channel: state.channel,
                loading: state.loading,
                game: state.game,
                user: state.user,
                searchChannels,
                clearChannels,
                getPopularChannels,
                getChannel,
                getGame,
                getUser
            }}
        >
            {props.children}
        </ChannelContext.Provider>
    );
};

export default ChannelState;