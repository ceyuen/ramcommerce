import React, { Component } from 'react';

import './App.css';
import PromotionBanner from '../components/promotionBanner.jsx';
import Main from './Main.jsx';
import Navbar from '../components/navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PromotionBanner />
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
