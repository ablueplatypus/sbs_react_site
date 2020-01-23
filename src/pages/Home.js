import React, { Component } from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

class Home extends Component {

  render() {
    return (
      <div>
      <Navbar/>
        <div className ="container">
          <h1>Welcome to Specialty Building Solutions</h1>
          <p>Specialty Building Solutions (SBS) has been providing professional property care for the past 25 years for commercial and residential properties such as J.P Morgan Chase, TD Bank, Jones Lang LaSalle, Silverstein Properties, National Grid and The Empire State Building. We service New York City, and all areas on Long Island. It is a family run operation that prides ourselves on having a Pierson involved on any project big or small.</p>
        </div>
      <Footer />
      </div>
    )
  }
}
export default Home;
