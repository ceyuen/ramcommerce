import React from 'react';
import { Item } from 'semantic-ui-react';

const OrderItems = ({ orderItems }) => (
  <div>
    <h2>
      Shopping Cart
    </h2>
    <Item.Group divided>
      {orderItems.map((item, key) => (
        <Item key={key}>
          <Item.Image size='small' src='https://picsum.photos/320/240/?random' alt='Random Photo' />
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

export default OrderItems;