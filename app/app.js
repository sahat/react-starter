/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'whatwg-fetch';
import 'babel-polyfill';

// Bootstrap CSS
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/* eslint-disable import/no-unresolved */
// Load the favicon
import 'file?name=[name].[ext]!./favicon.png';
/* eslint-enable import/no-unresolved */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
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

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
