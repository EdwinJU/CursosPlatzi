import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HolaMundo from './components/HolaMundo';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import ButtonWithState from './components/ButtonWithState';

ReactDOM.render(
  <React.StrictMode>
    <ButtonWithState/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
