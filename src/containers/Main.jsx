import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Inventory from '../components/inventory.jsx';
import Promotion from '../components/promotion.jsx';
import ProductDetails from '../components/productDetails.jsx';

const Main = () => (
  <Switch>
    <Route exact path='/shop' component={Inventory} />
    <Route path ='/shop/:itemId' component={ProductDetails}/>
    <Route path='/promotions' component={Promotion} />
    <Route exact path='/' render={() => (<Redirect to='/shop'/>)}/>
  </Switch>
)

export default Main;