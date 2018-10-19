import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

const ShippingOptions = ({ shippingOptions, handleRadioChange, radioCheck }) => (
  <div className='border-box'>
    <h2>
      Shipping Options
    </h2>
    <Form>
      {shippingOptions
        ? shippingOptions.map((option, key) => (
          <Form.Field key={key}>
            <Radio
              label={`${option.shipOptionName} - $${option.shipCost}`}
              name='shipCost'
              value={option.shipCost}
              checked={radioCheck(option.shipCost)}
              onChange={handleRadioChange}
            />
          </Form.Field>
        ))
        : null}
    </Form>
  </div>
)

export default ShippingOptions;