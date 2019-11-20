import React, { Component } from 'react';
import Navbar from '../componets/Navbar';

class Home extends Component {

  render() {
    return (
      <div>
      <Navbar/>
        <div className ="container">
          <h1>Welcome to Specialty Building Solutions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in sollicitudin turpis. Etiam sed convallis leo, vel posuere magna. Curabitur sed feugiat nisi. Sed quis nunc iaculis, consequat velit id, consectetur nulla. Curabitur vel libero sit amet sem tempus interdum. Quisque malesuada neque sit amet viverra posuere. Aliquam in volutpat quam. Curabitur tellus neque, dapibus sed turpis a, egestas congue augue. Nulla nibh nunc, malesuada eget vehicula eget, vehicula vel enim. Aenean congue tempor ipsum vitae interdum. Aenean consectetur felis vel quam placerat, ultricies venenatis nulla lobortis. Aenean iaculis tortor pharetra nibh dapibus vulputate. Duis fringilla felis sed justo ultricies, nec viverra ex blandit. Etiam ornare eros blandit nisl interdum, eu pretium purus porta. Donec luctus risus in magna ultrices, et condimentum orci placerat.</p>
        </div>
      </div>
    )
  }
}
export default Home;
