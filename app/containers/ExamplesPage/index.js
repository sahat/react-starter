/*
 * ExamplesPage
 */

import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class ExamplesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Examples" />
        <h1 className="display-4 m-t-3 m-b-3">Examples</h1>

        <div className="card card-block">
          <h4 className="card-title">Bootstrap CSS overrides</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/bootstrap-global" className="card-link">Using ":global"</Link>
          <Link to="/examples/bootstrap-classnames" className="card-link">Using "classnames"</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Pagination</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/pagination" className="card-link">Pagination</Link>
          <Link to="/examples/pagination-url" className="card-link">Pagination with URL change</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Lazy load images</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/lazy-load" className="card-link">Lazy load</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Icons</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/icons-fa" className="card-link">Font Awesome</Link>
          <Link to="/examples/icons-svg" className="card-link">Custom SVG icons</Link>
        </div>

        <div className="card card-block">
          <h4 className="card-title">Authentication <small className="text-muted">(requires back-end)</small></h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/examples/pagination" className="card-link">Log in</Link>
          <Link to="/examples/pagination" className="card-link">Sign up</Link>
          <Link to="/examples/pagination" className="card-link">Forgot your password</Link>
          <Link to="/examples/pagination" className="card-link">Sign in with Facebook</Link>
        </div>
      </div>
    );
  }
}

export default ExamplesPage;
