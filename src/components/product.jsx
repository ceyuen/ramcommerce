import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class Product extends Component {
  handleClick = () => {
    
  }

  render() {
    return (
      <Card>
        <Image src='https://loremflickr.com/320/240/snow' />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>${this.props.price}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
