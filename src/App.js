// import React from 'react';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';

const App = () => {

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" pages ={About}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
