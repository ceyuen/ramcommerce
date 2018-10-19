import React, { Component } from 'react';
import { Grid, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import api from '../api.js';
import OrderSummary from './orderSummary.jsx';
import ShoppingCart from './shoppingCart.jsx';
import ShippingOptions from './shippingOptions.jsx';
import PromotionInCart from './promotionInCart.jsx';
import CartModalSuccess from './cartModalSucess.jsx';
import './cart.css';

export default class Cart extends Component {
  state = {
    orderItems: [],
    modalOpen: false
  }

  componentDidMount() {
    this.parseSessionStorage();
    api.shipping.getAll()
      .then(({ data }) => {
        this.setState({
          shippingOptions: data,
          shipCost: data[0].shipCost
        }, () => this.updateCost())
      });
  }

  updateCost = () => {
    let discount = 0;
    if (this.state.promotion) {
      if (this.state.promotion.promotionType === 'PercentOff') {
        discount = this.state.merchandiseTotal * this.state.promotion.promoAmt;
      } else if (this.state.promotion.promotionType === 'ValueOff') {
        discount = this.state.promotion.promoAmt;
      }
    }
    
    let subTotal = this.state.merchandiseTotal + this.state.shipCost - discount;
    let tax = Math.ceil(subTotal * .1);
    let total = subTotal + tax;
    this.setState({
      discount,
      subTotal,
      tax,
      total,
    })
  }

  radioCheck = shipCost => this.state.shipCost === shipCost

  handleRadioChange = (e, { value }) => this.setState({ shipCost: value }, () => this.updateCost())

  handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleModalClose = () => this.setState({ modalOpen: false })

  handlePlaceOrder = () => {
    api.order.post({
      'merchantId': 'QueenOfDragons',
      'orderItems': this.state.orderItems,
      'promotion': {
        ...this.state.promotion,
        'orderSubtotal': this.state.subTotal,
      },
      'taxTotal': this.state.tax,
      'shippingTotal': this.state.shipCost,
      'merchantOrderReference': 'HandOfTheQueen',
      'orderDate': Math.floor(Date.now() / 1000),
      'signature': 'Unused. A digital signature for this object'
    })
      .then(({ data }) => 
        this.setState({
          modalOpen: true,
          transactionId: data.transactionId
        })
      )
  }

  parseSessionStorage = () => {
    let orderItems = [];
    for (let key in window.sessionStorage) {
      if (typeof window.sessionStorage[key] === 'string') {
        orderItems.push(JSON.parse(window.sessionStorage[key]));
      }
    }
    let merchandiseTotal = orderItems.reduce((a, b) => a + (b.qtyOrdered * b.price), 0);

    this.setState({
      orderItems: orderItems,
      merchandiseTotal: merchandiseTotal
    });
  }

  applyPromotion = () => {
    api.promotion.getOne({ promoId: this.state.promoId })
      .then(({ data }) => {
        this.setState({ promotion: data }, () => this.updateCost());
      })
  }

  render() {
    return (
      <div className='cart'>
        {window.sessionStorage.length
          ? <Grid stackable columns={2}>
            <Grid.Column width={12}>
              <ShoppingCart orderItems={this.state.orderItems} />
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
                <OrderSummary
                  merchandiseTotal={this.state.merchandiseTotal}
                  discount={this.state.discount}
                  shipCost={this.state.shipCost}
                  subTotal={this.state.subTotal}
                  tax={this.state.tax}
                  total={this.state.total}
                  handlePlaceOrder={this.handlePlaceOrder}
                />
              </Sticky>
            </Grid.Column>
            <CartModalSuccess 
              modalOpen={this.state.modalOpen} 
              transactionId={this.state.transactionId} 
              handleModalClose={this.handleModalClose}
            />
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