import React, { Fragment } from 'react';
import './Navbar.css';

const nav = require('../../data/nav').default;

const Navbar = () => {
    //Update src/data/nav to add new Navbar links
    var navLinks = nav.navLinks;

    return (
        <Fragment>
            <div className="navbar">
                {navLinks.map((link) => {
                    return (
                        <a href={link.linkDestination} className='navbar-link'>
                            {link.linkDisplayText}
                        </a>
                    )
                })}
            </div>
        </Fragment>
    );
}

export default Navbar;