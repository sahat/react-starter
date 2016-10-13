import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import css from './styles.css';

// Custom SVG icon
import ContactsIcon from './contacts.svg';

// Custom Component icon
import FacebookIcon from '../../../components/FacebookIcon';

const CalendarIcon = (
  <svg height="75" width="75" viewBox="0 0 50 50">
    <path d="M 11 0 C 10.477778 0 9.9395305 0.18546949 9.5625 0.5625 C 9.1854695 0.93953051 9 1.4777778 9 2 L 9 4 L 2 4 C 1.4777778 4 0.93953051 4.1854695 0.5625 4.5625 C 0.18546949 4.9395305 0 5.4777778 0 6 L 0 48 C 0 48.522222 0.18546949 49.060469 0.5625 49.4375 C 0.93953051 49.814531 1.4777778 50 2 50 L 48 50 C 48.522222 50 49.060469 49.814531 49.4375 49.4375 C 49.814531 49.060469 50 48.522222 50 48 L 50 6 C 50 5.4777778 49.814531 4.9395305 49.4375 4.5625 C 49.060469 4.1854695 48.522222 4 48 4 L 41 4 L 41 2 C 41 1.4777778 40.814531 0.93953051 40.4375 0.5625 C 40.060469 0.18546949 39.522222 0 39 0 L 37 0 C 36.477778 0 35.939531 0.18546949 35.5625 0.5625 C 35.185469 0.93953051 35 1.4777778 35 2 L 35 4 L 15 4 L 15 2 C 15 1.4777778 14.814531 0.93953051 14.4375 0.5625 C 14.060469 0.18546949 13.522222 0 13 0 L 11 0 z M 11 2 L 13 2 L 13 8 L 11 8 L 11 2 z M 37 2 L 39 2 L 39 8 L 37 8 L 37 2 z M 2 6 L 9 6 L 9 8 C 9 8.5222222 9.1854695 9.0604695 9.5625 9.4375 C 9.9395305 9.8145305 10.477778 10 11 10 L 13 10 C 13.522222 10 14.060469 9.8145305 14.4375 9.4375 C 14.814531 9.0604695 15 8.5222222 15 8 L 15 6 L 35 6 L 35 8 C 35 8.5222222 35.185469 9.0604695 35.5625 9.4375 C 35.939531 9.8145305 36.477778 10 37 10 L 39 10 C 39.522222 10 40.060469 9.8145305 40.4375 9.4375 C 40.814531 9.0604695 41 8.5222222 41 8 L 41 6 L 48 6 L 48 14 L 2 14 L 2 6 z M 2 16 L 48 16 L 48 48 L 2 48 L 2 16 z M 25.3125 22.3125 C 25.2125 23.0125 24.8 25.8125 20 25.8125 L 20 27.59375 L 24.8125 27.59375 L 24.8125 40.6875 L 27 40.6875 L 27 22.3125 L 25.3125 22.3125 z" />
  </svg>
);

class IconsCustomSvg extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Icons using custom SVG" />
        <div className="m-t-2 m-b-2">
          <Link to="/examples">← Go back</Link>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">app</li>
          <li className="breadcrumb-item">containers</li>
          <li className="breadcrumb-item">ExamplesPage</li>
          <li className="breadcrumb-item">IconsCustomSvg</li>
          <li className="breadcrumb-item">index.js</li>
        </ol>

        <p>
          It's pretty common to use custom SVG icons provided to you by a designer. This example demonstrates how to use custom SVG icons in React components.
        </p>

        <h4>Image tag</h4>
        <img src={ContactsIcon} className={css.icon} alt="Contacts" />
        <p>
          This one is the simplest approach that requires minimum effort. SVG import magic is handled for us by a Webpack loader:
        </p>
        <pre>{'{ test: /.(eot|svg|ttf|woff|woff2)$/, loader: \'file-loader\' }'}</pre>

        <h4>Inline SVG <small className="text-muted">(mouse over me)</small></h4>
        <div className={css.inlineSvg}>
          {CalendarIcon}
        </div>
        <p>
          You may want to embed SVG directly inside a component if you need to add interactions. When including an SVG, be sure to update certain properties:
        </p>
        <ul>
          <li>Update <code>enable-background</code> => <code>enableBackground</code></li>
          <li>Remove <code>xmlns:xlink</code></li>
          <li>Remove <code>style</code></li>
          <li>Remove <code>font-family</code></li>
        </ul>

        <h4>Generic Icon Component</h4>
        <p>As an alternative, create a custom SVG wrapper component <code>{'<Icon />'}</code> which takes several props like <strong>src</strong>, <strong>width</strong>, <strong>height</strong> and <strong>color</strong>.</p>
        <p>
          Yet another common approach is to have an individual component for each icon. Sarah Drasner wrote an excellent tutorial <a href="https://css-tricks.com/creating-svg-icon-system-react/">Creating an SVG Icon System with React</a> if you want to learn more.
        </p>

        <h5>Example: <code>{'<FacebookIcon />'}</code> component</h5>
        <FacebookIcon />
      </div>
    );
  }
}

export default IconsCustomSvg;
