// import React from 'react';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  return (
    <Router>
        <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;
