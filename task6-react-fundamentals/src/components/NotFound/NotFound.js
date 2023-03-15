import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: '1rem 2rem' }}>
    <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
    <h3>Page Not Found</h3>
    <p>
      <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default NotFound;
