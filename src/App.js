import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Channel from "./components/pages/Channel";
import NotFound from "./components/pages/NotFound";
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
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Channel' component={Channel} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
    </ChannelState>
  );
}

export default App;
