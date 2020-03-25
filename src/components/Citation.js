import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Citation = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <section>
            <h1>Citation</h1>
            <div className="contenu">
                <div style={{color: theme.syntax }} className="citation">
                    L'art de la réussite consiste à savoir s'entourer des meilleurs.
                </div>
                <div>De John Kennedy</div>
            </div>
        </section>
    )
}

export default Citation;