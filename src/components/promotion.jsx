import React, { Component } from 'react';

import api from '../api.js';
import './promotion.css';

export default class Promotion extends Component {
  state = {}

  componentDidMount() {
    api.promotion.getAll()
      .then(({ data }) => {
        this.setState({ promotions: data });
      })
      .catch(error => {
        this.setState({ errorOccurred: true });
      })
  }

  compilePromotionStatement(promoDetails) {
    let promoAmtStr;

    if (promoDetails.promotionType === 'ValueOff') {
      promoAmtStr = `$${promoDetails.promoAmt}`
    } else if (promoDetails.promotionType === 'PercentOff') {
      promoAmtStr = `${promoDetails.promoAmt}%`
    } else {
      // if promotion type is not standard, split promotion type by uppercase letters}
      promoAmtStr = `${promoDetails.promoAmt} ${promoDetails.promotionType.split(/(?=[A-Z])/).join(" ")}`
    }

    return (
      <p>
        {`${promoAmtStr} off entire order with minimum purchase of $${promoDetails.minimumOrderValue}!`}
      </p>
    )

  }

  handlePromoClick = () => {
    this.setState(prevState => ({ showAllPromos: !prevState.showAllPromos }));
  }

  renderPriorityPromo = () => {
    if (this.state.promotions) {
      return (
        <span className='center-align'>
          {/* take first in promotions array assuming it is sorted and priority promo is first */}
          {this.compilePromotionStatement(this.state.promotions[0])}
          {this.showMoreOption()}
          {this.renderOtherPromos()}
        </span>
      )
    }
  }

  renderOtherPromos = () => {
    if (this.state.showAllPromos) {
      let promotionsExcludingPriority = this.state.promotions.slice(0);
      promotionsExcludingPriority.shift();
      return (
        <div>
          {promotionsExcludingPriority.map(promotion => this.compilePromotionStatement(promotion))}
          <div className='promos-option' onClick={() => { this.handlePromoClick() }}>
            Less Offers
          </div>
        </div>
      )
    }
  }

  showMoreOption = () => {
    if (!this.state.showAllPromos) {
      return (
        <span className='promos-option' onClick={() => this.handlePromoClick()}>
          More offers
        </span>
      )
    }
  }

  render() {
    return (
      <div className='sticky'>
        <div className='promotion'>
          {this.renderPriorityPromo()}
        </div>
      </div>
    )
  }
}