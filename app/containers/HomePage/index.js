/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { getLocation } from './actions';

import css from './styles.css';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleLocationClick() {
    this.props.dispatch(getLocation());
  }

  render() {
    const locationInfo = this.props.location ? (
      <div className={css.location}>
        <span className={css.marker}>
          <span className={css.sonar} />
        </span>
        <strong>Lat/Long:</strong> {this.props.location.join(', ')}
      </div>
    ) : null;

    const locationError = this.props.error ? (
      <div className={css.location}>
        <span className="text-danger">
          <strong>Error:</strong> {this.props.error}
        </span>
      </div>
    ) : null;

    return (
      <div>
        <Helmet title="Home" />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">React Starter</h1>
            <p className="lead">A boilerplate for React.js web applications.</p>
            <Link to="/features" className="btn btn-primary btn-lg">Learn more</Link>
            {' '}
            <button type="button" className="btn btn-success btn-lg" onClick={this.handleLocationClick}>
              {this.props.isFetching ? 'Loading...' : 'Get my location'}
            </button>
            {locationInfo || locationError}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3>Heading</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui.
              </p>
              <a href="#" className="btn btn-secondary">View details</a>
            </div>
            <div className="col-sm-4">
              <h3>Heading</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui.
              </p>
              <a href="#" className="btn btn-secondary">View details</a>
            </div>
            <div className="col-sm-4">
              <h3>Heading</h3>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                mollis euismod. Donec sed odio dui.
              </p>
              <a href="#" className="btn btn-secondary">View details</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.array,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { location, error, isFetching } = state.home;
  return {
    location,
    error,
    isFetching,
  };
}

export default connect(mapStateToProps)(HomePage);
