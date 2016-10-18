import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
