import React, { useReducer } from "react";
import axios from "axios";
import ChannelContext from "./channelContext";
import ChannelReducer from "./channelReducer";
import {
    SEARCH_CHANNELS,
    CLEAR_CHANNELS,
    SET_LOADING,
    GET_CHANNEL,
} from "../types";

const ChannelState = (props) => {
    const initialState = {
        channels: [],
        channel: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ChannelReducer, initialState);

    const setLoading = () => dispatch({ type: SET_LOADING});

    // Search Channels
    const searchChannels = async (text) => {
        setLoading();
        const res = await axios.get(
            `https://api.twitch.tv/helix/search/channels?query=${text}`,
            {
                headers: {
                    'authorization': `Bearer ${process.env.CLIENT_TOKEN}`,
                    'client-id': process.env.CLIENT_ID
                }
            }
        );
        dispatch({
            type: SEARCH_CHANNELS,
            payload: res.data.items,
        });
    };
    // Get Channel
    const getChannel = async (broadcaster_id) => {
        setLoading();
        const res = await axios.get(
            `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`, 
            {
                headers: {
                    'authorization': `Bearer ${process.env.CLIENT_TOKEN}`,
                    'client-id': process.env.CLIENT_ID
                }
            }
        );
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
                searchChannels,
                clearChannels,
                getChannel
            }}
        >
            {props.children}
        </ChannelContext.Provider>
    );
};

export default ChannelState;