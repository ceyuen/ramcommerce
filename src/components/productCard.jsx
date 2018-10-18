import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const ProductCard = ({ name, price }) => (
  <Card>
    <Image src='https://loremflickr.com/320/240/snow' />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{price}</Card.Description>
    </Card.Content>
  </Card>
)

export default ProductCard;