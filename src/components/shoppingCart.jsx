import React from 'react';
import { Item } from 'semantic-ui-react';

const ShoppingCart = ({ orderItems }) => (
  <div>
    <h2>
      Shopping Cart
    </h2>
    <Item.Group divided>
      {orderItems.map((item, key) => (
        <Item key={key}>
          <Item.Image size='small' src='https://loremflickr.com/320/240/cat' alt={`Photo of a cat`} />
          <Item.Content>
            <Item.Header>
              {item.name}
            </Item.Header>
            <Item.Description>
              ${item.price * item.qtyOrdered}
            </Item.Description>
            <Item.Extra>
              Item Price: ${item.price} <br />
              Qty: {item.qtyOrdered}
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </div>
)

export default ShoppingCart;