import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ProductModal extends Component {
  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.props.handleModalClose}
        size='small'
        closeIcon
      >
        <Modal.Content>
          {`${this.props.qtyOrdered} ${this.props.name} has been added to your cart.`}
        </Modal.Content>
        <Modal.Actions>
          <Link to='/shop'>
            <Button color='green' onClick={this.props.handleModalClose} inverted>
              Continue Shopping
          </Button>
          </Link>
          <Link to='/cart'>
            <Button onClick={this.props.handleModalClose}>
              Checkout
          </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    )
  }
}
