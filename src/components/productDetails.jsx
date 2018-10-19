import React, { Component } from 'react';
import { Button, Icon, Grid, Image, Input, Loader } from 'semantic-ui-react'

import api from '../api.js';
import './productDetails.css';

export default class ProductDetails extends Component {
  state = {
    qtyOrdered: 1
  };

  componentDidMount() {
    api.inventory.getAll()
      .then(({ data }) => {
        let itemId = this.props.location.pathname.split('/').pop();
        let productData = data.items.find(product => product.itemId === itemId);
        this.setState({ product: productData });
      })
  }

  handleAddToCart = () => {
    let addToCartDetails = {
      ...this.state.product,
      qtyOrdered: this.state.qtyOrdered,
    };
    delete addToCartDetails.inStock;
    window.sessionStorage.setItem(`${this.state.product.itemId}`, JSON.stringify(addToCartDetails));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  renderQtyInput = () => {
    if (this.state.product.inStock) {
      return (
        <div>
          In Stock
          <Input
            label='Qty.'
            placeholder='1'
            defaultValue='1'
            name='qtyOrdered'
            onChange={this.handleInputChange}
            size='tiny'
          />

          <Button 
            animated 
            color='blue'
            onClick={this.handleAddToCart}
            >
            <Button.Content visible>Add To Cart</Button.Content>
            <Button.Content hidden>
              {`Add ${this.state.qtyOrdered} To Cart`}
            </Button.Content>
          </Button>
        </div>
      )
    } else {
      return (
        <span>
          Out of Stock
        </span>
      )
    }
  }

  render() {
    return (
      <div>
        {this.state.product
          ? <Grid stackable divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column textAlign="right">
                <Image src='https://loremflickr.com/320/240/dog' alt='Photo of a dog' />
              </Grid.Column>
              <Grid.Column>
                <h2>
                  {this.state.product.name}
                </h2>
                <h3>
                  ${this.state.product.price}
                </h3>
                {this.renderQtyInput()}
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
          : <Loader active size='huge' />
        }
      </div>
    )
  }
}