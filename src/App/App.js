import React, { Fragment, useContext } from 'react'
import './App.css';
import { ThemeContext } from "../providers/ThemeProvider";
import Header from '../components/Header';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Fragment>
      <div className={darkMode ? "app-dark" : "app-light"}>
        <Header />
      </div>
    </Fragment>
  );
}

export default App;
