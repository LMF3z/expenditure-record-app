import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'animate.css';
import Store from './store/Store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
