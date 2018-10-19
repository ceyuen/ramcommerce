import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../api.js';
import './promotionBanner.css';
import compilePromotionStatement from '../promotionHelper.js';

export default class PromotionBanner extends Component {
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
        <div className='promotion center-align'>
          {this.state.promotions ? compilePromotionStatement(this.state.promotions[0]) : null}
           &nbsp;
          <Link to='/promotions'>
            More Offers
          </Link>
        </div>
      </div>
    )
  }
}

