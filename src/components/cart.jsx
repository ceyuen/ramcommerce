import React, { Component } from 'react';
import { Button, Grid, Item, Sticky, Form, Radio, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import api from '../api.js';
import OrderSummary from './orderSummary.jsx';
import ShoppingCart from './shoppingCart.jsx';
import ShippingOptions from './shippingOptions.jsx';
import PromotionInCart from './promotionInCart.jsx';

export default class Cart extends Component {
  state = {
    orderItems: [],
  }

  componentDidMount() {
    this.parseSessionStorage();
    api.shipping.getAll()
      .then(({ data }) => {
        this.setState({
          shippingOptions: data,
          shipCost: data[0].shipCost
        })
      })


  }

  radioCheck = shipCost => this.state.shipCost === shipCost

  handleRadioChange = (e, { value }) => this.setState({ shipCost: value })

  handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handlePlaceOrder = (taxTotal, shippingTotal) => {

  }

  parseSessionStorage = () => {
    let orderItems = [];
    for (let key in window.sessionStorage) {
      if (typeof window.sessionStorage[key] === 'string') {
        orderItems.push(JSON.parse(window.sessionStorage[key]));
      }
    }

    this.setState({ orderItems: orderItems });
  }

  calculateDiscount = (discount, merchandiseTotal) => {
    if (this.state.promotion) {
      if (this.state.promotion.promotionType === 'PercentOff') {
        discount = merchandiseTotal * this.state.promotion.promoAmt;
      } else if (this.state.promotion.promotionType === 'ValueOff') {
        discount = merchandiseTotal - this.state.promotion.promoAmt;
      }
    }
  }

  applyPromotion = () => {
    api.promotion.getOne({promoId: this.state.promoId})
      .then(({ data }) => {
        this.setState({promotion: data});
      })
      .then(() => {

      })
  }

  render() {
    return (
      <div>
        {window.sessionStorage.length
          ? <Grid stackable columns={2}>
            <Grid.Column>
              <ShoppingCart orderItems={this.state.orderItems}/>
              <ShippingOptions 
                shippingOptions={this.state.shippingOptions}
                handleRadioChange={this.handleRadioChange}
                radioCheck={this.radioCheck}
              />
              <PromotionInCart 
                handleInputChange={this.handleInputChange}
                applyPromotion={this.applyPromotion}
              />
              {console.log(this.state)}
            </Grid.Column>
            <Grid.Column width={4}>
              <Sticky>
                <h2>
                  Order Summary
                </h2>
                <OrderSummary 
                  promotions={this.state.promotions}
                  orderItems={this.state.orderItems}
                  shippingCost={this.state.shipCost}
                />
              </Sticky>
            </Grid.Column>
          </Grid>
          : <h2>
            Your cart is empty.
            <br />
            <Link to='/shop'>
              Check out our products!
            </Link>
          </h2>}
      </div>
    )
  }
}