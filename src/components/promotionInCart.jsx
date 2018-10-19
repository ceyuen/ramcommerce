import React from 'react'; 
import { Input, Button } from 'semantic-ui-react';

const PromotionInCart = ({ applyPromotion, handleInputChange }) => (
    <div>
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