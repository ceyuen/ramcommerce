import React, { Component } from 'react';

import './App.css';
import Promotion from '../components/promotion.jsx';
import Inventory from '../components/inventory.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Promotion />
        <Inventory />
      </div>
    );
  }
}

export default App;
