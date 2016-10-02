import React from 'react';
import { Route } from 'react-router';

import App from 'containers/App';
import HomePage from 'containers/HomePage';
import FeaturePage from 'containers/FeaturePage';
import NotFoundPage from 'containers/NotFoundPage';

export default function createRoutes(store) {
  return (
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
