import React, { Component } from 'react';

import './App.css';
import Promotion from '../components/promotion.jsx';
import Main from './Main.jsx';
import Navbar from '../components/navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Promotion />
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
