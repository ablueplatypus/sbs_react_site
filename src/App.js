// import React from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
