import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import './styles.css';

class BootstrapGlobal extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Bootstrap CSS overrides via :global" />
        <div className="m-t-2 m-b-2">
          <Link to="/examples">← Go back</Link>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">app</li>
          <li className="breadcrumb-item">containers</li>
          <li className="breadcrumb-item">ExamplesPage</li>
          <li className="breadcrumb-item">BootstrapGlobal</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>
        <p>
          Unlike the "classnames" example, showing "before" and "after"
          does not make much sense here because
          <code>:global</code> will simply override the class name everywhere,
          so try to use it only when necessary.
        </p>
        <p>
          You may think just because we have <code>.bg-warning</code>
          override in <strong>styles.css</strong>, it should be reflected here. Nope, not
          without the <code>:global</code> prefix.
        </p>
        <div className="card card-block bg-warning">
          <h3 className="card-title">Special title treatment</h3>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <p>
          In order to demonstrate a global override, let's pick another Bootstrap class
          like <code>.bg-info</code> (light blue).
        </p>
        <div className="card card-block bg-info">
          <h3 className="card-title">Special title treatment</h3>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <p>And there you go! Now whenever you add <code>.bg-info</code> on any other page,
          it will always have the style above.
        </p>
        <p>
          <strong>Note:</strong> You may see a brief "flash of unstyled content", however,
          that will not be an issue in the final build output. You can verify it yourself by
          running <code>npm run start:production</code>.
        </p>
      </div>
    );
  }
}

export default BootstrapGlobal;
