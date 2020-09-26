import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, []);

    const getStyle = () => {
        return `mobile-menu ${isOpen ? 'opened' : ''}`;
    }

    const getMobileMenu = () => {
        return (
            <nav className='navbar'>
                <div className="menu-tray">
                    <h1>Twitch Lookup</h1>
                    <a href='#' onClick={() => setOpen(!isOpen)}><i className="fa fa-bars" /></a>
                </div>
                <div className={getStyle()}>
                <ul className='navbar-links'>
                    <li>
                        <Link to='/' onClick={() => setOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to='/About' onClick={() => setOpen(false)}>About</Link>
                    </li>
                </ul></div>
            </nav>
        );
    }
    const getDesktopMenu = () => {
        return (
            <nav className='navbar'>
                <h1>Twitch Lookup</h1>
                <ul className='navbar-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
    return (
        screenWidth > 600 ? getDesktopMenu() : getMobileMenu()
    );
};

export default NavBar;
