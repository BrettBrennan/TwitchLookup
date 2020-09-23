import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChannelState from './components/context/channels/ChannelState';

import './App.css';

/*
  process.env.CLIENT_ID
  process.env.CLIENT_TOKEN
  https://api.twitch.tv/helix/search/channels?query=
*/

function App() {
  return (
    <ChannelState>
        
    </ChannelState>
  );
}

export default App;
