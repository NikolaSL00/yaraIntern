import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: '0rem 2rem' }}>
    <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
    <h3>Page Not Found</h3>
    <p>
      <Link style={{ color: '#0060B6', textDecoration: 'none' }} to="/">
        Go Home
      </Link>
    </p>
  </div>
);

export default NotFound;
