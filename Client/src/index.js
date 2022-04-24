import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../src/Style/Css/index.css'
import PicosPardos from './PicosPardos'



ReactDOM.render(
  <BrowserRouter>
    <PicosPardos />
  </BrowserRouter>,
  document.getElementById('root')
);
