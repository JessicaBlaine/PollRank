import React from 'react';
import { Provider } from 'react-redux';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from './app';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;
