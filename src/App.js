import React from 'react';
import './App.css';
import Hearder from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Career from './components/Career';
import Body from './components/Body';
import SwitchToggle from './components/SwitchToggle';
import Citation from './components/Citation';
import Footer from './components/Footer';

// Context
import ThemeBodyProvider from './contexts/ThemeContext';

function App() {
  return (
    <>
      <ThemeBodyProvider>
        <Body>
          <SwitchToggle/>
          <Hearder/>
          <About/>
          <Skills/>
          <Career/>
          <Citation/>
          <Footer/>
        </Body>
      </ThemeBodyProvider>
    </>
  );
}

export default App;
