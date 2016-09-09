/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import Button from 'components/Button';
import H1 from 'components/H1';

import styles from './styles.css';

export class FeaturePage extends React.Component {
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  openHomePage = () => {
    this.openRoute('/');
  };

  render() {
    return (
      <div>
        <Helmet title="Feature Page" />
        <H1>
          Features
        </H1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
              Quick scaffolding
            </p>
            <p>
              Automate the creation of components, containers, routes, selectors
              and sagas - and their tests - right from the CLI!
            </p>
          </li>

          <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
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
        <Button handleRoute={this.openHomePage}>
          Open Home Page
        </Button>
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
