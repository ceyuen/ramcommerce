import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Inventory from '../components/inventory.jsx';
import AllPromotions from '../components/allPromotions.jsx';
import ProductDetails from '../components/productDetails.jsx';
import Cart from '../components/cart.jsx';

const Main = () => (
  <Switch>
    <Route exact path='/shop' component={Inventory} />
    <Route path ='/shop/:itemId' component={ProductDetails}/>
    <Route path='/promotions' component={AllPromotions} />
    <Route path='/cart' component={Cart} />
    <Route exact path='/' render={() => (<Redirect to='/shop'/>)}/>
  </Switch>
)

export default Main;