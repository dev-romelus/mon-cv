import React from 'react';
import { data } from '../data/data';

const About = () => {
    const { info1, info2, info3 } = data;
    return (
        <section className="about" style={{ height: '100vh' }}>
            <h1>A propos de moi</h1>
            <div className="contenu">
                
                <p>{info1}</p>
                <p>{info2}</p>
                <p>{info3}</p>

            </div>
        </section>
    )
}

export default About;