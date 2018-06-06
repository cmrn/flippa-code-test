import { store } from 'react-easy-state';
import equal from 'fast-deep-equal';
import { 
  addCounter, 
  getCounters, 
  incrementCounter, 
  decrementCounter, 
  deleteCounter
} from './api';

const counterStore = store({
  counters: {},
  async load() {
    const response = await getCounters();
    handleApiResponse(response);
  },
  reset() {
    counterStore.counters = {};
  },
  async add(title) {
    const response = await addCounter(title);
    handleApiResponse(response);
  },
  async increment(id) {
    const counter = counterStore.get(id);
    counter.count++;
    const response = await incrementCounter(id);
    handleApiResponse(response);
  },
  async decrement(id) {
    const counter = counterStore.get(id);
    counter.count--;
    const response = await decrementCounter(id);
    handleApiResponse(response);
  },
  async delete(id) {
    delete counterStore.counters[id];
    const response = await deleteCounter(id);
    handleApiResponse(response);
  },
  get(id) {
    const counter = counterStore.counters[id];
    if(!counter) throw new Error(`invalid counter id ${id}`);
    return counter;
  }
});

function handleApiResponse(countersArray) {
  const newCounters = countersArray.reduce((acc, counter) => {
    acc[counter.id] = counter;
    return acc;
  }, {});

  if(!equal(counterStore.counters, newCounters)) {
    counterStore.counters = newCounters;
  }
};

export default counterStore;
