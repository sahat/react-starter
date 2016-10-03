import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import cn from 'classnames';

import css from './styles.css';

function BootstrapClassnames(props) {

  return (
    <div className="container">
      <Helmet title="Bootstrap CSS overrides via classnames" />
      <div className="m-t-2 m-b-2">
        <Link to="/examples">← Go back</Link>
      </div>
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
        running <code>npm run start:production</code>.</p>
    </div>
  );
}

export default BootstrapClassnames;
