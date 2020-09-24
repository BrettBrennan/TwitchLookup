import React, { useState, useContext } from "react";

import ChannelContext from "../context/channels/channelContext";

const Search = () => {
    const channelContext = useContext(ChannelContext);

    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
        channelContext.searchChannels(text);
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
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Search Users...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {channelContext.channels.length > 0 && (
                <button
                    className='btn btn-light btn-block'
                    onClick={channelContext.clearChannels}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
