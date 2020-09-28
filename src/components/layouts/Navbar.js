import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    const [navPos, setNavPos] = useState(-400);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, []);
    const getStyle = () => {
        return { 
            top: `${navPos}px`
        };
    }
    const toggleTray = () => {
        setOpen(!isOpen);
        setNavPos(isOpen ? 50 : -400);
    }
    const getMobileMenu = () => {
        return (
            <nav className='navbar'>
                <div className="menu-tray">
                    <Link to='/'><h1>Twitch Lookup</h1></Link>
                    <a href='#' onClick={() => toggleTray()}><i className="fa fa-bars" /></a>
                </div>
                <div style={getStyle()} className="mobile-menu">
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
                <Link to='/'><h1>Twitch Lookup</h1></Link>
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
