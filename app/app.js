/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Needed for Bootstrap CSS
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
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// If you use Redux devTools extension, since v2.0.1, they added an
// `updateStore`, so any enhancers that change the store object
// could be used with the devTools' store.
// As this boilerplate uses Redux & Redux-Saga, the `updateStore` is needed
// if you want to `take` actions in your Sagas, dispatched from devTools.
if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store);
}

const history = syncHistoryWithStore(browserHistory, store);

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';
import createRoutes from './routes';
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
