import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProductsCatalog from '../pages/ProductsCatalog';
// import ProductPage from '../pages/ProductPage';
// import ShoppingCart from '../pages/ShoppingCart';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} /> 
                <Route path="/app" component={ProductsCatalog} />  

                {/* <Route path="/orphanage/:id" component={ProductPage} />    */}
                {/* <Route path="/create" component={ShoppingCart} />    */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
