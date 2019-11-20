// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {

  return (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
    </Router>
  );
}

export default App;
