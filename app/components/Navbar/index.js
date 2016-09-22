import React from 'react';
import { Link } from 'react-router';

import css from './styles.css';

function Navbar(props) {
  let rightNav = (
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/login" activeClassName="active">Log in</Link></li>
      <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
    </ul>
  );

  if (props.user) {
    rightNav = (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="dropdown-toggle">
            <span className={css.username}>John Smith</span>
            <i className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/account">My Account</Link></li>
            <li className="divider" />
            <li><a href="#" onClick={props.logout}>Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-inverse navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">Project name</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/features" activeClassName="active">Features</Link></li>
            <li><Link to="/api" activeClassName="active">API Example</Link></li>
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
