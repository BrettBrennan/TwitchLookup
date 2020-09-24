import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Twitch Lookup</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
