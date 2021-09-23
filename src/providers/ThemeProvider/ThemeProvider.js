import React, { useReducer } from 'react';
import createContext from 'src/utils/createContext';

const [Provider, useTheme, ThemeContext] = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.theme,
                params: {
                    ...state.params,
                    ...action.params,
                },
            }
        default:
            return { ...state }
    }
}

/**
 * @description Exposes an object to retrieve and set the theme in the application.
 * The theme can be changed and parameters can be snet to the next theme as if
 * it were a browser parameter.
 * 
 * @example switching to a hypothetical custom theme and send parameter
 * setTheme('CUSTOM_THEME', {primaryColor: someColor });
 * 
 * @example consuming the parameters in a theme to display in the color selector
 * const { params } = useTheme();
 * <div background: params.primaryColor
 */

 const ThemeProvider = ({ children, initialTheme, initialParams, }) => {
     const [view, dispatch] = useReducer(reducer, {theme: initialTheme, params: initialParams, })

     const setTheme = (theme, params = {}) => {
         dispatch({ type: 'SET_THEME', theme, params, })
     }

     const value = React.useMemo(() => ({theme: theme.theme, params: theme.params, setTheme }), [theme]);

     return (
         <Provider value={value}>
             {children}
         </Provider>
     )
 };

 export {
     useTheme,
     ThemeProvider,
     ThemeContext
 }