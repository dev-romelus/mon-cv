import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Body from './components/Body';
import ThemeBodyProvider from './contexts/ThemeContext';
import './index.css'

ReactDOM.render(
    <ThemeBodyProvider>
        <Body>
            <App />
        </Body>
    </ThemeBodyProvider>, 
document.getElementById('root'));