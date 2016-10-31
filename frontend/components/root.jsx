import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
// Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Components
import App from './app';
import NewPoll from './new_poll';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NewPoll} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
