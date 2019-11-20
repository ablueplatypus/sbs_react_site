import React, { Component } from 'react';
import Navbar from '../componets/Navbar';

class Home extends Component {

  render() {
    return (
      <div>
      <Navbar/>
        <div className ="container">
          <h1>Welcome to Specialty Building Solutions</h1>
          <p>Lorum ipsum</p>
        </div>
      </div>
    )
  }
}
export default Home;
