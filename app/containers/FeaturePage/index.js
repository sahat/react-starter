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
      <div className="container-fluid">
        <Helmet title="Feature Page" />
        <div className="panel">
          <div className="panel-body">
            <h3>Features</h3>
            <ul className="list-unstyled">
              <li className={css.listItem}>
                <p className={css.listItemTitle}>
                  Quick scaffolding
                </p>
                <p>
                  Automate the creation of components, containers, routes, selectors
                  and sagas - and their tests - right from the CLI!
                </p>
              </li>
              <li className={css.listItem}>
                <p className={css.listItemTitle}>
                  Instant feedback
                </p>
                <p>
                  Enjoy the best DX and code your app at the speed of thought! Your
                  saved changes to the CSS and JS are reflected instantaneously
                  without refreshing the page. Preserve application state even when
                  you update something in the underlying code!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link to="/" className="btn btn-danger">Back to home</Link>
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
