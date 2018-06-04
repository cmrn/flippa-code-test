import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = ({ counters, onAdd }) => (
  <div className="App">
    <header>
      Counter App
      <button onClick={() => onAdd('foo')}>Add Counter</button>
      <code>{JSON.stringify(counters)}</code>
    </header>
  </div>
);

App.propTypes = {
  counters: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default App;
