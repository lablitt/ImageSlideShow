import React from 'react';
import ReactDOM from 'react-dom/client';
import AppFake from './components/AppFake.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // this is causing double rerender
  <React.StrictMode>
    <AppFake />
  </React.StrictMode>
);
