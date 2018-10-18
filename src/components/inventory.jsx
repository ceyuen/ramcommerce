import React, { Component } from 'react';
import api from '../api.js';

import './inventory.css';
import ProductCard from './productCard.jsx';

export default class Inventory extends Component {
  state = {};

  componentDidMount() {
    api.inventory.getAll()
      .then(({ data }) => {
        this.setState({inventory: data.items})
      })
  }

  render() {
    return (
      <div className='inventory-container'>
        {this.state.inventory 
          ? this.state.inventory.map(item => <ProductCard name={item.name} price={item.price}/>) 
          : null}
      </div>
    )
  }
}