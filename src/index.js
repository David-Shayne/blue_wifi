import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/css/nucleo-icons.css';
import 'assets/scss/blk-design-system-react.scss?v=1.1.0';
import 'assets/demo/demo.css';

import Index from 'views/Index.js';
import LandingPage from 'views/LandingPage.js';
import IssuePage from 'views/IssuePage.js';
import AboutPage from 'views/AboutPage.js';
import PricingPage from 'views/PricingPage.js';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/components" render={props => <Index {...props} />} />
            <Route path="/issue" render={props => <IssuePage {...props} />} />
            <Route path="/about" render={props => <AboutPage {...props} />} />
            <Route
                path="/pricing"
                render={props => <PricingPage {...props} />}
            />
            <Route path="/" render={props => <LandingPage {...props} />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
