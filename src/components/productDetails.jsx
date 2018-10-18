import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react'

import api from '../api.js';

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
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
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