import React, { Component } from 'react';
import Navigation from './Navigation';
import Foot from './Foot';
import Background from './Background';
import 'tachyons';
import './Home.css';

class Home extends Component {

  render() {
    return (
        <div>
          <Navigation />
          <Background />
          <Foot />
        </div>
    );
  }
}

export default Home;
