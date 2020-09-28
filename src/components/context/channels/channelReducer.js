import {
    SEARCH_CHANNELS,
    CLEAR_CHANNELS,
    SET_LOADING,
    GET_CHANNEL,
    GET_GAME,
    GET_USER
} from "../types";


export default (state, action) => {
    switch (action.type) {
        case SEARCH_CHANNELS:
            return {
                ...state,
                channels: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_GAME:
            return {
                ...state,
                game: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case CLEAR_CHANNELS:
            return {
                ...state,
                channels: [],
                loading: false,
            };
        case GET_CHANNEL:
            return {
                ...state,
                channel: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};