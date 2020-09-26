import React, { useState, createRef, useContext, Fragment, useEffect } from "react";

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
    const searchAllRef = createRef();
    const searchPopRef = createRef();
    const [text, setText] = useState("");
    const [selectedSize, setSelectorSize] = useState({width: 0, height: 0});
    const [selectedPos, setSelectorPos] = useState({left: 0, top: 0});
    const [selected, setSelected] = useState(0);
    const padding = 4;

    //! Refactor selector code to make use event callback from onClick function?
    //* e.x onClick={(e) => {
    //*     setSelectorSize(... getRef from e and set selector size...)
    //*     setSelectorPos(... getRef from e and set selector position...)
    //*}}

    useEffect(() => {
        switch (selected){
            case 0: // All
                if (searchAllRef.current){
                    setSelectorSize({
                        width: searchAllRef.current.offsetWidth + (padding*2),
                        height: searchAllRef.current.offsetHeight + (padding*2)
                    });
                    setSelectorPos({
                        left: searchAllRef.current.offsetLeft - padding,
                        top: searchAllRef.current.offsetTop - padding
                    });
                }
                break;
            case 1:
                if (searchPopRef.current){
                    setSelectorSize({
                        width: searchPopRef.current.offsetWidth + (padding*2),
                        height: searchPopRef.current.offsetHeight + (padding*2)
                    });
                    setSelectorPos({
                        left: searchPopRef.current.offsetLeft - padding,
                        top: searchPopRef.current.offsetTop - padding
                    });
                }
                break;
        }
    }, [selected]);

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
            //setText("");
        }
    };
    console.log(searchAllRef.current);
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
            <ul className="search-style-tray">
                <div style={{
                    left: `${selectedPos.left}px`,
                    top: `${selectedPos.top}px`,
                    width: `${selectedSize.width}px`,
                    height: `${selectedSize.height}px`
                    }}
                    className="search-style-selector">
                </div>
                <li>
                    <button ref={searchAllRef} className="search-style-button" onClick={() => setSelected(0)}>All</button>
                </li>
                <li>
                    <button ref={searchPopRef} className="search-style-button" onClick={() => setSelected(1)}>Popular</button>
                </li>
            </ul>
        </div>
    );
};

export default Search;
