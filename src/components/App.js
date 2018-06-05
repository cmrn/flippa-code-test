import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import AddCounter from './AddCounter';
import Counter from './Counter';

const App = ({ counters, onAdd }) => (
  <div className="App">
    <h1>Counter App</h1>

    <AddCounter onAdd={onAdd} />

    {counters.map(counter => 
      <Counter 
        key={counter.id} 
        title={counter.title} 
        count={counter.count} 
        onChange={() => {}}
      /> 
    )}
  </div>
);

App.propTypes = {
  counters: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default App;
