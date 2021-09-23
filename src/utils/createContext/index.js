import React from 'react';

/**
 * This utility creates everything needed to use the Context API
 * from React in various places throughout the application with 
 * a single function call
 * 
 * @param {any} initialValue - adds an initial value to the new context
 * @returns {Array} array containing the context provider, useContext utility, and context object itself
 */

const createContext = (initialValue) => {
    const Context = React.createContext(initialValue);
    const useContext = () => React.useContext(Context);

    return [Context.Provider, useContext, Context]
}

export default createContext;