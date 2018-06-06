import React from 'react';
import PropTypes from 'prop-types';
import cnames from 'classnames';
import './App.css';
import AddCounter from './AddCounter';
import Counter from '../containers/Counter';

const App = ({ counters, onAdd, className, ...props }) => (
  <div {...props} className={cnames("App", className)}>
    <h1>Counter App</h1>

    <AddCounter onAdd={onAdd} />

    {Object.keys(counters).map(id => <Counter key={id} id={id} />)}
  </div>
);

App.propTypes = {
  counters: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default App;
