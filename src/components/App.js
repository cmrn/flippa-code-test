import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import AddCounter from './AddCounter';

const App = ({ counters, onAdd }) => (
  <div className="App">
    <header>
      Counter App
      <AddCounter onAdd={onAdd} />
      <code>{JSON.stringify(counters)}</code>
    </header>
  </div>
);

App.propTypes = {
  counters: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default App;
