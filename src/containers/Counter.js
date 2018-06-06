import React from 'react';
import Counter from '../components/Counter';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

const CounterContainer = ({ id, ...props }) => {
  const counter = counterStore.counters[id];
  if(!counter) return null;
  return (
    <Counter
      {...props}
      title={counter.title}
      count={counter.count}
      onIncrement={() => counterStore.increment(counter.id)}
      onDecrement={() => counterStore.decrement(counter.id)}
      onDelete={() => counterStore.delete(counter.id)}
    />
  );
};

export default view(CounterContainer);
