/*
 * BootstrapClassNames example page
 */

import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import cn from 'classnames';

import css from './styles.css';

export class BootstrapClassnames extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Bootstrap CSS overrides via classnames" />
        <div className="m-t-2 m-b-2">
          <Link to="/examples">← Go back</Link>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">app</li>
          <li className="breadcrumb-item">containers</li>
          <li className="breadcrumb-item">ExamplesPage</li>
          <li className="breadcrumb-item">BootstrapClassnames</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>
        <h3>Before</h3>
        <p>This is a default "success" alert component directly from the Bootstrap documentation.</p>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <p className="m-b-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>

        <h3>After</h3>
        <p>
          And now after we add a custom CSS class from <strong>styles.css</strong> using
          the <strong>classnames</strong> module.
        </p>
        <div className={cn('alert alert-success', css.alertSuccess)} role="alert">
          <h4 className={cn('alert-heading', css.alertHeading)}>Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <p className="m-b-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>

        <p>
          <strong>Note:</strong> You may see a brief "flash of unstyled content", however,
          that will not be an issue in the final build output. You can verify it yourself by
          running <code>npm run start:production</code>.
        </p>
      </div>
    );
  }
}

export default BootstrapClassnames;
