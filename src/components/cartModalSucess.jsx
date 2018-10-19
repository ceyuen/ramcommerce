import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class cartModalSuccess extends Component {
  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.props.handleModalClose}
        size='small'
        closeIcon
      >
        <Header content='Your order has been placed' />
        <Modal.Content>
          {`Your confirmation number is ${this.props.transactionId}`}
          <br />
          We thank you for your business!
        </Modal.Content>
        <Modal.Actions>
          <Link to='/shop'>
            <Button color='green' onClick={this.props.handleModalClose} inverted>
              Continue Shopping
          </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    )
  }
}
