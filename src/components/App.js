import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = (props) => (
  <div className="App">
    <header>
      Counter App
      <pre>{JSON.stringify(props)}</pre>
    </header>
  </div>
);

App.propTypes = {
  counters: PropTypes.array.isRequired,
};

export default App;
