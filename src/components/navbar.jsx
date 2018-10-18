import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default class Navbar extends Component {
  state = { activeItem: 'shop' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary className='sticky'>
        <Menu.Item
          name='shop'
          active={activeItem === 'shop'}
          onClick={this.handleItemClick} >
          <Link to='/shop'>Shop</Link>
        </Menu.Item>
        <Menu.Item
          name='promotions'
          active={activeItem === 'promotions'}
          onClick={this.handleItemClick}>
          <Link to='/promotions'>Promotions</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}>
            <Link to='/cart'>
              <Icon name="shopping cart" />
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
