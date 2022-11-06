import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Helmet from "helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Helmet>
    <title>Counter App</title>
   </Helmet>
  <App />
  </BrowserRouter>
  </React.StrictMode>
);
