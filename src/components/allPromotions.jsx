import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

import api from '../api.js';
import './promotionBanner.css';
import compilePromotionStatement from '../promotionHelper.js';


export default class AllPromotions extends Component {
  state = {}

  componentDidMount() {
    api.promotion.getAll()
      .then(({ data }) => {
        this.setState({ promotions: data });
      })
  }

  render() {
    return (
      <div>
        <Item.Group divided>
          {this.state.promotions
            ? this.state.promotions.map((promo, key) => (
              <Item key={key}>
                <Item.Content>
                  <Item.Header>{compilePromotionStatement(promo)}</Item.Header>
                  <Item.Meta>
                    Ends {promo.end}
                  </Item.Meta>
                  <Item.Description>
                    Use code: {promo.promoId}
                  </Item.Description>
                </Item.Content>
              </Item>
            ))
            : null}
        </Item.Group>
      </div>
    )
  }
}