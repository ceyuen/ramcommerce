import React, { Component } from 'react';
import { Grid, Image, Loader } from 'semantic-ui-react'

import api from '../api.js';
import './productDetails.css';

export default class ProductDetails extends Component {
  state = {};

  componentDidMount() {
    api.inventory.getAll()
      .then(({ data }) => {
        let itemId = this.props.location.pathname.split('/').pop();
        let productData = data.items.find(product => product.itemId === itemId);
        this.setState({ product: productData });
      })
  }

  renderLoaderOrGrid = () => {
    if (this.state.product) {
      return (
        <Grid stackable divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="right">
              <Image src='https://loremflickr.com/320/240/dog' alt='Photo of a dog'/>
            </Grid.Column>
            <Grid.Column>
              <h2>
                {this.state.product.name}
              </h2>
              <h3>
                ${this.state.product.price}
              </h3>
              <span>
                {this.state.product.inStock 
                  ? 'In stock'
                  : 'Out of stock'}
              </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <h3>
                Description
              </h3>
              <span>
                {this.state.product.description}
              </span>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    } else {
      return (
        <Loader active size='huge' />
      )
    }
  }


  render() {
    return (
      <div>
        {this.renderLoaderOrGrid()}
      </div>
    )
  }
}