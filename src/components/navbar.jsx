import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <Menu pointing secondary className='navbar'>
        <Menu.Item
          name='shop'
          onClick={this.handleItemClick} >
          <Link to='/shop'>Shop</Link>
        </Menu.Item>
        <Menu.Item
          name='promotions'
          onClick={this.handleItemClick}>
          <Link to='/promotions'>Promotions</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='cart'
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
