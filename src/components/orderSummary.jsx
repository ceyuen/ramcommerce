import React from 'react';
import { Button } from 'semantic-ui-react';

const OrderSummary = ({ merchandiseTotal, discount, shipCost, subTotal, tax, total, handlePlaceOrder}) => (
    <div>
      Merchandise: ${merchandiseTotal}
      {discount
        ?
          <span>
            <br/>
            Discount: ${discount}
          </span>
        : null}
      <br />
      Shipping: ${shipCost}
      <hr />
      Subtotal: ${subTotal}
      <br />
      Tax: ${tax}
      <hr />
      Order Total: ${total}
      <br />
      <Button color='blue' onClick={handlePlaceOrder}>
        Place Order 
      </Button>
    </div>
)

export default OrderSummary;