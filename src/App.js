// import React from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';

function App() {

const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p> You clicked {count} times</p>
      <button onClick={() => setCount(count +1)}>
        Click me
      </button>
    <div>
      <About

      />
      </div>

    </div>
  );
}

export default App;
