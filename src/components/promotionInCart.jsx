import React from 'react'; 
import { Input, Button } from 'semantic-ui-react';

const PromotionInCart = ({ applyPromotion, handleInputChange }) => (
    <div className='border-box'>
      <h2>
        Promotions
      </h2>
      <Input placeholder='Promo-01' name='promoId' onChange={handleInputChange} />
      <Button onClick={applyPromotion}>
        Apply
      </Button>
    </div>
)

export default PromotionInCart; 