import React from 'react';

import css from './styles.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container-fluid">
        <p className="pull-left">
          © 2016 Company, Inc. All Rights Reserved.
        </p>
        <p className="pull-right">
          <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
