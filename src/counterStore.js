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
  async add(title) {
    const response = await addCounter(title);
    handleApiResponse(response);
  },
  async increment(id) {
    const counter = getOrDie(id);
    counter.count++;
    const response = await incrementCounter(id);
    handleApiResponse(response);
  },
  async decrement(id) {
    const counter = getOrDie(id);
    counter.count--;
    const response = await decrementCounter(id);
    handleApiResponse(response);
  },
  async delete(id) {
    delete counterStore.counters[id];
    const response = await deleteCounter(id);
    handleApiResponse(response);
  },
});

function handleApiResponse(countersArray) {
  const newCounters = countersArray.reduce((acc, counter) => {
    acc[counter.id] = counter;
    return acc;
  }, {});

  // Only replace the existing counters if they've changed, to
  // prevent unnecessary renders
  if(!equal(counterStore.counters, newCounters)) {
    counterStore.counters = newCounters;
  }
};

function getOrDie(id) {
  const counter = counterStore.counters[id];
  if(!counter) throw new Error(`invalid counter id ${id}`);
  return counter;
}

export default counterStore;
