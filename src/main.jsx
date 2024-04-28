import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import

import App from './App.jsx';
import './index.css';

// Use createRoot to render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
