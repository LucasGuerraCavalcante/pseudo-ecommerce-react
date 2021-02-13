import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import ProductsCatalog from '../pages/ProductsCatalog';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} /> 
                <Route path="/app" component={ProductsCatalog} />    
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
