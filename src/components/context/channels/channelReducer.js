import {
    SEARCH_CHANNELS,
    CLEAR_CHANNELS,
    SET_LOADING,
    GET_CHANNEL,
    GET_GAME,
    GET_USER,
    ERROR
} from "../types";


export default (state, action) => {
    switch (action.type) {
        case SEARCH_CHANNELS:
            return {
                ...state,
                channels: action.payload,
                error: null,
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
                error: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false
            }
        case CLEAR_CHANNELS:
            return {
                ...state,
                channels: [],
                error: null,
                loading: false,
            };
        case GET_CHANNEL:
            return {
                ...state,
                channel: action.payload,
                error: null,
                loading: false,
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
};