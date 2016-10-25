import Root from './components/root';
import configureStore from './store/store';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, rootEl);
});
