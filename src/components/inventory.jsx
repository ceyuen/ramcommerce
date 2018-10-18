import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import api from '../api.js';
import './inventory.css';
import Product from './product.jsx';

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
          ? this.state.inventory.map((item, key) => (
            <Link to={`/shop/${item.itemId}`}>
              <Product name={item.name} price={item.price}/> 
            </Link>
          ))
          : null}
      </div>
    )
  }
}