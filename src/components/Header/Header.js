import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
        <header className="App-header">
            <h1 className='App-title'>Au Pair Social Network</h1>
        </header>
        <Navbar />
    </Fragment>
  );
}

export default Header;