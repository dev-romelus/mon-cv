import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeBodyProvider = ({ children }) => {
    const [themes, setThemes] = useState({
        isLightTheme: true,
        light: { syntax: '#444452', bgColor:'#fff' },
        dark: { syntax: '#e7e7e7', bgColor:'#171c28' },
    });
    
    const changeTheme = () => {
        setThemes((state) => ({ ...themes, isLightTheme: !state.isLightTheme }));
    };

    return (
        <ThemeContext.Provider value={{ ...themes, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeBodyProvider;