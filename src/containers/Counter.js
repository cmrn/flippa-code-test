import React from 'react';
import Counter from '../components/Counter';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

const CounterContainer = ({ id }) => {
  const counter = counterStore.counters.find(c => c.id === id);
  return (
    <Counter
      title={counter.title}
      count={counter.count}
      onChange={()=>{}}
    />
  );
};

export default view(CounterContainer);
