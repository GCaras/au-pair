import React, { Fragment, useContext } from 'react';
import { ThemeContext } from "../../providers/ThemeProvider";
import './Navbar.css';

const nav = require('../../data/nav').default;

const Navbar = () => {
    //Update src/data/nav to add new Navbar links
    var navLinks = nav.navLinks;

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <Fragment>
            <div className={darkMode ? 'dark-navbar' : 'light-navbar'}>
                {navLinks.map((link, i) => {
                    return (
                        <a 
                            aria-label={link.linkDescription} 
                            href={link.linkDestination} 
                            className='navbar-link'
                            key={i}
                        >
                            {link.linkDisplayText}
                        </a>
                    )
                })}
            </div>
        </Fragment>
    );
}

export default Navbar;