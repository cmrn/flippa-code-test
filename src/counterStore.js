import { store } from 'react-easy-state';
import { addCounter, getCounters, incrementCounter, decrementCounter } from './api';

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
  async increment(id) {
    const newCounters = await incrementCounter(id);
    counterStore.counters = newCounters;
  },
  async decrement(id) {
    const newCounters = await decrementCounter(id);
    counterStore.counters = newCounters;
  },
});

export default counterStore;