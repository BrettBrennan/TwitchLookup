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
//    const defaultSelector = createRef();
    const [text, setText] = useState("");
    // const [liveSwitch, setLiveSwitch] = useState(false);
    // const [selectedSize, setSelectorSize] = useState({width: 0, height: 0});
    // const [selectedPos, setSelectorPos] = useState({left: 0, top: 0});
    // const [selected, setSelected] = useState(0);
    // const padding = 4;

    // useEffect(() => {
    //     if (defaultSelector.current){
    //         if (selected === 0){
    //             setSelectorSize({
    //                 width: defaultSelector.current.offsetWidth + padding * 2,
    //                 height: defaultSelector.current.offsetHeight + padding * 2
    //             });
    //             setSelectorPos({
    //                 left: defaultSelector.current.offsetLeft - padding,
    //                 top: defaultSelector.current.offsetTop - padding
    //             });
    //         }
    //     }
    //     // eslint-disable-next-line
    // }, [])

    const onChange = (e) => {
        setText(e.target.value);
        if (e.target.value === "")
            channelContext.getPopularChannels();
        else
            channelContext.searchChannels(e.target.value);
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
    // const handleClick = (e, sel) => {
    //     setSelectorSize({
    //         width: e.target.offsetWidth + padding * 2,
    //         height: e.target.offsetHeight + padding * 2
    //     });
    //     setSelectorPos({
    //         left: e.target.offsetLeft - padding,
    //         top: e.target.offsetTop - padding
    //     });
    //     setSelected(sel);
    // }
    // const getLiveButtonClass = (liveSwitch) => {
    //     return liveSwitch ? "live-button-switch lbs-active" : "live-button-switch";
    // }
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
/*
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
                    <button ref={defaultSelector} className="search-style-button" onClick={(e) => handleClick(e, 0)}>All</button>
                </li>
                <li>
                    <button className="search-style-button" onClick={(e) => handleClick(e, 1)}>Popular</button>
                </li>
                <li>
                    <button className={getLiveButtonClass(liveSwitch)} onClick={() => setLiveSwitch(!liveSwitch)}>
                        Live Channels Only
                    </button>
                </li>
            </ul>
*/
export default Search;
