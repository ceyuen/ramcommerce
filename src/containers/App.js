import React, { Component } from 'react';

import './App.css';
import api from '../api.js';
import Promotion from '../components/promotion.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log(api)
    return api.inventory.getAll()
      .then(({ data }) => {
        this.setState({inventory: data})
      })
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.inventory)}
        <Promotion />
      </div>
    );
  }
}

export default App;
