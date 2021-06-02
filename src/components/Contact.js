import React from 'react';
import styled from 'styled-components';
import sendFormHelpers from '../helpers/sendForm';

const Contact = ({ className }) => {

    function sendForm(e) {
        e.preventDefault();

        sendFormHelpers
            .sendForm('template_1c78ino', e.target, () => {
                alert('Your message has been sent!');
            }, 
            () => {
                alert('Your message could not be sent.');
            });

        e.target.reset();
    }

    return (
        <div className={className}>
            <form onSubmit={sendForm}>
                <h1>Contacter moi</h1>

                <div>
                    <input name='name' type='text' placeholder='Entrer votre nom' required/>
                </div>
                <div>
                    <input name='email' type='email' placeholder='Entrer votre email' required/>
                </div>
                <div>
                    <textarea name='message' placeholder='Laisser un message ici...' rows="5" cols="33" required/>
                </div>

                <button type='submit'>Envoyer</button>

            </form> 
        </div>
    )
}

const StyledContact = styled(Contact)`
    height: 100vh;
    > form {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 648px;
        margin-top: 30px;
        > div {
            > input, textarea  {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin-bottom: 12px;
                outline: none;
            }
        }
        > button {
            background-color: #f6b93b;
            padding: 10px;
            border-radius: 4px;
            outline: none;
            border: none;
            cursor: pointer;
        }
    }
`;

export default StyledContact;