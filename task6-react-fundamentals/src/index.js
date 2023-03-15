import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './styles/app.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
