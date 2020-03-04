import React,{ useContext } from 'react';
import { skills } from '../data/skills';
import { ThemeContext } from '../contexts/ThemeContext';

const Skills = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <section className="skills">
            <h1>compétences</h1>
            <div className="contenu">
                <div className="all_skills">

                    <div className="category_skills">
                        <div className="title_skills">langages</div>
                        <ul>
                            {skills.langages.map((item, index)=> <li key={index} style={{color: theme.syntax}} className="item_skills">{item}</li>)}
                        </ul>
                    </div>

                    <div className="category_skills">
                        <div className="title_skills">frameworks</div>
                        <ul>
                            {skills.frameworks.map((item, index)=> <li key={index} style={{color: theme.syntax}} className="item_skills">{item}</li>)}
                        </ul> 
                    </div>

                    <div className="category_skills">
                        <div className="title_skills">outils</div>
                        <ul>
                            {skills.outils.map((item, index)=> <li key={index} style={{color: theme.syntax}} className="item_skills">{item}</li>)}
                        </ul>
                    </div>

                    <div className="category_skills">
                        <div className="title_skills">qualité</div>
                        <ul>
                            {skills.qualite.map(item=> <li style={{color: theme.syntax}} className="item_skills">{item}</li>)}
                        </ul>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Skills;
