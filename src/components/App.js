import React from 'react';
import './App.css';

const App = (props) => (
  <div className="App">
    <header>
      Counter App
      <pre>{JSON.stringify(props)}</pre>
    </header>
  </div>
);

export default App;
