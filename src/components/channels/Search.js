import React, { useState, useContext} from "react";

import ChannelContext from "../context/channels/channelContext";

const Search = () => {
    const channelContext = useContext(ChannelContext);
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
        if (e.target.value === "")
            channelContext.getPopularChannels();
        else
            channelContext.searchChannels(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            //TODO: Add some validation result.
        } else {
            channelContext.searchChannels(text); 
            //setText("");
        }
    };
    return (
        <div className="search-container">
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
            <h3>
                { text ? `Currently viewing search results for: ${text}` : `Currently viewing top live channels on Twitch` }
            </h3>
        </div>
    );
};
export default Search;
