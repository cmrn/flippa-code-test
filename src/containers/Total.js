import React from 'react';
import Total from '../components/Total';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

const TotalContainer = (props) => {
  const total = Object.keys(counterStore.counters)
    .map(k => counterStore.counters[k].count)
    .reduce((a, b) => a + b, 0);
  return <Total {...props} total={total} />
};

export default view(TotalContainer);
