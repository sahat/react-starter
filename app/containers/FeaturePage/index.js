/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import css from './styles.css';

export class FeaturePage extends React.Component {
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  openHomePage = () => {
    this.openRoute('/');
  };

  render() {
    return (
      <div className="container">
        <Helmet title="Features" />
        <h1 className="display-4 m-t-3 m-b-3">Features</h1>
        <div className="card card-block">
          <h4 className="card-title">Quick scaffolding</h4>
          <p className="card-text">
            Automate the creation of components, containers, routes, selectors
            and sagas - and their tests - right from the CLI!
          </p>
        </div>
        <div className="card card-block">
          <h4 className="card-title">Instant feedback</h4>
          <p className="card-text">
            Enjoy the best DX and code your app at the speed of thought! Your
            saved changes to the CSS and JS are reflected instantaneously
            without refreshing the page. Preserve application state even when
            you update something in the underlying code!
          </p>
        </div>
      </div>
    );
  }
}
FeaturePage.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(FeaturePage);
