import React from 'react';
import AddCounter from '../components/AddCounter';
import { view } from 'react-easy-state';
import counterStore from '../counterStore';

const AddCounterContainer = (props) => (
  <AddCounter {...props} onAdd={counterStore.add} />
);

export default view(AddCounterContainer);
