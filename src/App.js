import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Mainpage from './components/Mainpage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }


  render() {
    return (
      <Router>
        <div>

          <Route exact path='/' component={Home} />
          <Route path='/mainpage' component={Mainpage} />
          {//<Logo />

          //<Foot />
        }
        </div>
      </Router>

    );
  }
}

export default App;
