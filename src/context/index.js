import React, { useState } from "react";

export const ThemeContext = React.createContext({});

const ThemeProvider = ({children}) => {

const [theme, setTheme] = useState('gallery');

const listTheme = () => {
        setTheme('list')
    }
const galleryTheme = () => {
        setTheme('gallery')
    }
return (
   <ThemeContext.Provider value={{theme, listTheme, galleryTheme}}>
        {children}
   </ThemeContext.Provider>
)
}

export default ThemeProvider