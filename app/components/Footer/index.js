import React from 'react';

import css from './styles.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container-fluid">
        <p className="pull-left">© 2016 Company, Inc. All Rights Reserved.</p>
        <ul className="pull-right list-unstyled list-inline">
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
