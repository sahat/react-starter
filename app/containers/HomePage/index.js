/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import css from './styles.css';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">React Starter</h1>
            <p>A boilerplate for React.js web applications.</p>
            <Link to="/features" className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
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

function mapStateToProps(state) {
  return {
    home: state.home,
    username: state.home.username,
  };
}

export default connect(null)(HomePage);
