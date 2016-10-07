/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'whatwg-fetch';
import 'babel-polyfill';

// Bootstrap CSS
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Load the favicon
import 'file?name=[name].[ext]!./favicon.png';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll';
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState, browserHistory);

// Set up the routes
import createRoutes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={createRoutes(store)}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
);
