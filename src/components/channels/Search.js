import React, { useState, useContext } from "react";

import ChannelContext from "../context/channels/channelContext";
/*
    ! Removed clear button for more stream-lined user experience. Add back only if necessary!
    {channelContext.channels.length > 0 && (
        <button
            className='clear-button'
            onClick={channelContext.clearChannels}
        >
            Clear Search
        </button>
    )}
*/
const Search = () => {
    const channelContext = useContext(ChannelContext);

    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
        //channelContext.searchChannels(text);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            //TODO: Add some validation result.
        } else {
            channelContext.searchChannels(text);
            setText("");
        }
    };
    return (

        <form onSubmit={onSubmit} className='form'>
            <input
                type='text'
                name='text'
                placeholder='Search Channels...'
                value={text}
                onChange={onChange}
                className="search-box"
            />
            <input
                type='submit'
                value='Search'
                className='search-button'
            />
        </form>

    );
};

export default Search;
