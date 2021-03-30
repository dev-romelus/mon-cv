import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
