/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Home Page" />
        <h1>React Starter</h1>
        <p className="lead">A boilerplate for React.js web applications.</p>
        <div className="row">
          <div className="col-sm-4">
            <h3>Heading</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
              mollis euismod. Donec sed odio dui.
            </p>
            <a href="#" role="button" className="btn btn-default">View details</a>
          </div>
          <div className="col-sm-4">
            <h3>Heading</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
              mollis euismod. Donec sed odio dui.
            </p>
            <a href="#" role="button" className="btn btn-default">View details</a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h3>Heading</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
              mollis euismod. Donec sed odio dui.
            </p>
            <a href="#" role="button" className="btn btn-default">View details</a>
          </div>
          <div className="col-sm-4">
            <h3>Heading</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
              mollis euismod. Donec sed odio dui.
            </p>
            <a href="#" role="button" className="btn btn-default">View details</a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(HomePage);
