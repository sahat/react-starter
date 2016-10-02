/*
 * NotFoundPage
 */

import React from 'react';
import { Link } from 'react-router';

import css from './styles.css';

export function NotFoundPage() {
  return (
    <div className={css.centeredContainer}>
      <h1>Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NotFoundPage;
