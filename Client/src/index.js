import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../src/Style/Css/index.css'
import PicosPardos from './PicosPardos'
import { store } from './config/redux/store';




ReactDOM.render(
  // <Provider store = {store}>
  <BrowserRouter>
    <PicosPardos />
  </BrowserRouter>
  // </Provider>,
  ,document.getElementById('root')
);
