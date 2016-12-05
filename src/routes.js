import React, { Component, PropTypes } from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

/* containers */
import App from 'containers/app'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);
