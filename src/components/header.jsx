import React from 'react';

import Navbar from './navbar.jsx';
import PromotionBanner from './promotionBanner';
import './header.css';

const Header = () => (
  <div className='sticky'>
    <PromotionBanner />
    <Navbar />
  </div>
)

export default Header;