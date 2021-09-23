import React, { Fragment, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from "../../providers/ThemeProvider";
import './Header.css';

const SwitchButton = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onClick = () => {
        if (darkMode)
        theme.dispatch({ type: "LIGHTMODE" });
        else
        theme.dispatch({ type: "DARKMODE" });
    };

    return (
        <div className="theme-button-container">
        <button className={darkMode ? "btn-dark" : "btn-light"} onClick={onClick}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        </div>
    );
}

const Header = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <Fragment>
        <SwitchButton />
        <header className={darkMode ? "dark-app-header" : "light-app-header"}>
            <h1 className={"app-title"}>Au Pair Social Network</h1>
        </header>
        <Navbar />
    </Fragment>
  );
}

export default Header;