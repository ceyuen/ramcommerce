import React, { Component } from 'react';
import { Grid, Item, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  state = {
    orderItems: []
  };

  componentDidMount() {
    this.parseSessionStorage();
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

  renderOrderItems = () => {
    return (
      <div>
      <Item.Group divided>
        {this.state.orderItems.map(item => (
          <Item>
            <Item.Image size='small' src='https://loremflickr.com/320/240/cat' alt={`Photo of a cat`} />
            <Item.Content>
              <Item.Header as='a'>
                {item.name}
              </Item.Header>
              <Item.Description>
                ${item.price * item.qtyOrdered}
              </Item.Description>
              <Item.Extra>
                Item Price: ${item.price} <br/>
                Qty: {item.qtyOrdered}
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      </div>
    )
  }

  render() {
    return (
      <div>
        {window.sessionStorage.length
          ? <Grid stackable columns={2}>
            <Grid.Column>
              <h2>
                Shopping Cart
              </h2>
              {this.renderOrderItems()}
            </Grid.Column>
            <Grid.Column width={4}>
              <Sticky>
                <h2>
                  Order Summary
                </h2>
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