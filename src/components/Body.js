import React,{ useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const Body = ({ children }) => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="body" style={{background: theme.bgColor, color: theme.syntax}}>
            {children}
        </div>
    )
}

export default Body;