import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
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
                <Route exact path='/About' component={About} />
                <Route path='/Channel' component={Channel} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
    </ChannelState>
  );
}

export default App;
