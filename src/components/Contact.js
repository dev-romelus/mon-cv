import React from 'react';
import styled from 'styled-components';
import me from '../assets/me.jpg';

const Contact = ({ className }) => {
    return (
        <div className={className}>
            <div>
                <h1>Contactez moi</h1>
                <div>
                    <img src={me} alt='me'/>
                    <div>
                        Travaillons ensemble, envoyez-moi un message
                    </div>
                    <div>
                        <span>Address email: </span>
                        <a 
                        style={{ color: 'inherit' }}
                        href="mailto:romelusjeanmarie.pro@gmail.com">Contactez-moi</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const StyledContact = styled(Contact)`
    height: 100vh;
    > div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: auto;
        max-width: 824px;
        padding-top: 50px;
        > h1 {
            margin-top: 0;
            color: #007bff !important;
            text-transform: uppercase;
            text-align: right;
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 2px;
            margin-right: 64px;
        }

        > div {
            > img {
                height: 234px;
                width: 224px;
            }
            /* margin-left: 20px; */
        }
    }
`;

export default StyledContact;