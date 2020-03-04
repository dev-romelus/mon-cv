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
                    Vaut mieux être bien entouré qu'être seul.
                </div>
            </div>
        </section>
    )
}

export default Citation;