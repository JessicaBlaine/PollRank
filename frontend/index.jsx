import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, rootEl);
});
