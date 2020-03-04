import React, {useContext} from 'react';
import { career } from '../data/career';
import { ThemeContext } from '../contexts/ThemeContext';

const Career = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <section className="career">
            <h1>parcours</h1>
        <div className="contenu">

            <div className="parcours">

            {career.map(({ url, organisme, time, poste }, index)=>{

                return(
                    <div className="item">
                        <div className="place">
                            <div><a key={index} style={{color: theme.syntax}} href={url} target="_blank">{organisme}</a></div>
                            <div key={index} className="time">{time}</div>
                        </div>
                        <div key={index} className="poste">{poste}</div>
                    </div>
                );

            })}

            </div>

        </div>
        </section>
    )
}

export default Career;
