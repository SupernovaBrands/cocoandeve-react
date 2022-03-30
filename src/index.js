
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/style.scss';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

