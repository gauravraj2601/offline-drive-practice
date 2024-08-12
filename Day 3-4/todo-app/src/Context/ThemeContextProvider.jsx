


import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const ThemeContext = createContext();


const ThemeContextProvider = ({children}) => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark((prevTheme) => !prevTheme);
      };
    
  return (
    <ThemeContext.Provider value={{dark, toggleTheme }} >
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider