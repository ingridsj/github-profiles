import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootId = document.getElementById('root')
if (rootId === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(rootId);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

