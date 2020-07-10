import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
// import { Link } from 'react-scroll';

const Header = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <header className="intro">
            <h1 className="salut">
                Salut <span>&#128515;</span>
            </h1>
            <h2 className="iam">
                Je m'appelle
                {'  '}
                <span style={{color: theme.syntax, fontWeight:500}}>Romelus Jean-marie</span>, 
                je suis un développeur
                {' '}   
                <span style={{color:'#f6b93b', fontWeight:600}}>JavaScript!</span>
            </h2>
            <a 
            style={{ color: theme.syntax }}
            href="mailto:romelusjeanmarie.pro@gmail.com" 
            className="contact-me">Contactez-moi</a>
        </header>
    )
}

export default Header;
