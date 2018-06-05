import { store } from 'react-easy-state';
import { addCounter, getCounters } from './api';

const counterStore = store({
  counters: [],
  async load() {
    const newCounters = await getCounters();
    counterStore.counters = newCounters;
  },
  reset() {
    counterStore.counters = []
  },
  async add(title) {
    const newCounters = await addCounter(title);
    counterStore.counters = newCounters;
  },
});

export default counterStore;