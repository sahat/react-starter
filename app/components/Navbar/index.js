import React from 'react';
import { Link } from 'react-router';

import css from './styles.css';

function Navbar(props) {
  let rightNav = (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/login" className="nav-link" activeClassName="active">Log in</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="nav-link" activeClassName="active">Sign up</Link>
      </li>
    </ul>
  );

  if (!props.user) {
    rightNav = (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
            <span className={css.userDropdown}>John Smith</span>
            <i className="caret" />
          </a>
          <div className="dropdown-menu">
            <Link to="/account" className="dropdown-item">My Account</Link>
            <button onClick={props.logout} className="dropdown-item">Logout</button>
          </div>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-dark navbar-full bg-inverse">
      <div className="container">
        <button className="navbar-toggler hidden-sm-up bg-inverse" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          &#9776;
        </button>
        <div className="collapse navbar-toggleable-xs" id="collapsingNavbar">
          <a className="navbar-brand" href="/">Project name</a>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link" activeClassName="active">Features</Link>
            </li>
            <li className="nav-item">
              <Link to="/api" className="nav-link" activeClassName="active">API Example</Link>
            </li>
          </ul>
          {rightNav}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  user: React.PropTypes.object,
  logout: React.PropTypes.func,
};

export default Navbar;
