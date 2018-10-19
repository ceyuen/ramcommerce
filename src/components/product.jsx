import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class Product extends Component {
  render() {
    return (
      <Card>
        <Image src='https://picsum.photos/320/240/?random' alt='Random Photo'/>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>${this.props.price}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
