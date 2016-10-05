import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import HomePage from 'containers/HomePage';
import FeaturePage from 'containers/FeaturePage';
import ExamplesPage from 'containers/ExamplesPage';
import NotFoundPage from 'containers/NotFoundPage';

// Example pages
import BootstrapGlobal from 'containers/ExamplesPage/BootstrapGlobal';
import BootstrapClassnames from 'containers/ExamplesPage/BootstrapClassnames';
import Pagination from 'containers/ExamplesPage/Pagination';
import PaginationUrl from 'containers/ExamplesPage/PaginationUrl';
import IconsFontAwesome from 'containers/ExamplesPage/IconsFontAwesome';
import IconsCustomSvg from 'containers/ExamplesPage/IconsCustomSvg';

export default function createRoutes(store) {
  return (
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/examples">
        <IndexRoute component={ExamplesPage} />
        <Route path="bootstrap-global" component={BootstrapGlobal} />
        <Route path="bootstrap-classnames" component={BootstrapClassnames} />
        <Route path="pagination" component={Pagination} />
        <Route path="pagination-url" component={PaginationUrl} />
        <Route path="icons-fa" component={IconsFontAwesome} />
        <Route path="icons-svg" component={IconsCustomSvg} />
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
