import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './App.css';
import AddCounter from '../containers/AddCounter';
import Counter from '../containers/Counter';

const App = ({ counters, className, ...props }) => (
  <div {...props} className={cnames("App", className)}>
    <h1>Counter App</h1>

    <AddCounter />

    {Object.keys(counters).map(id => <Counter key={id} id={id} />)}
  </div>
);

App.propTypes = {
  counters: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default App;
