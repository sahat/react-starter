import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import * as FontAwesome from 'react-icons/lib/fa';

class IconsFontAwesome extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Icons using Font Awesome" />
        <div className="m-t-2 m-b-2">
          <Link to="/examples">← Go back</Link>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">app</li>
          <li className="breadcrumb-item">containers</li>
          <li className="breadcrumb-item">ExamplesPage</li>
          <li className="breadcrumb-item">IconsFontAwesome</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>
        <h5>Dependencies used in this example</h5>
        <ul>
          <li><a href="https://github.com/gorangajic/react-icons">react-icons</a></li>
        </ul>
        <p>
          This example uses <strong>react-icons</strong> package for displaying Font Awesome icons. Be sure to import icons from <code>'react-icons/lib/'</code> instead of <code>'react-icons'</code> directly, as you will get a syntax error because this package is written and distributed in ES6 and our Webpack does not transpile anything inside <strong>/node_modules/</strong> directory.
        </p>
        <p>There are three ways to import icons. Use whichever approach you prefer:</p>
        <dl>
          <dt>1. Import one icon</dt>
          <dd><pre>{'import FaBeer from \'react-icons/lib/fa/beer\''}</pre></dd>
          <dt>2. Import multiple icons</dt>
          <dd><pre>{'import { FaCamera, FaCalendar, FaCog } from \'react-icons/lib/fa\''}</pre></dd>
          <dt>3. Import all icons</dt>
          <dd><pre>{'import * as FontAwesome from \'react-icons/lib/fa\''}</pre></dd>
        </dl>
        <p>When referencing icons follow the camel-case notation prefixed with <code>Fa</code>. If you are not sure, you can always double-check by peeking into <em>node_modules/react-icons/fa/icon_name.js</em>. For example, <code>cc-amex</code> is <code>FaCcAmex</code> and <code>caret-square-o-right</code> is <code>FaCaretSquareORight</code>.</p>
        <h5>Basic icons</h5>
        <ul className="list-inline">
          <li className="list-inline-item"><FontAwesome.FaBeer /></li>
          <li className="list-inline-item"><FontAwesome.FaCamera /></li>
          <li className="list-inline-item"><FontAwesome.FaCalendar /></li>
          <li className="list-inline-item"><FontAwesome.FaCog /></li>
        </ul>
        <h5>Custom size and color</h5>
        <ul className="list-inline">
          <li className="list-inline-item">
            <FontAwesome.FaArchive size={36} />
          </li>
          <li className="list-inline-item">
            <FontAwesome.FaCcAmex color="#0072BC" size={36} />
          </li>
        </ul>
      </div>
    );
  }
}

export default IconsFontAwesome;
