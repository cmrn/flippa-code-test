import counterStore from './counterStore';
import * as api from './api';

const apiData = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: -1}
];
const expectedCounters = {
  asdf: {id: "asdf", title: "bob", count: 1},
  qwer: {id: "qwer", title: "steve", count: -1},
};
const mockApi = () => jest.fn().mockImplementation(() => Promise.resolve(apiData));
api.getCounters = mockApi();
api.addCounter = mockApi();
api.incrementCounter = mockApi();
api.decrementCounter = mockApi();
api.deleteCounter = mockApi();

afterEach(() => {
  counterStore.reset();
});

it('is initially empty', () => {
  expect(counterStore.counters).toEqual({});
});

describe('load', () => {
  it('loads data from the API into the store', async () => {
    await counterStore.load();
    expect(counterStore.counters).toEqual(expectedCounters);
    expect(api.getCounters.mock.calls.length).toEqual(1);
  });
});

describe('with a counter', () => {

  beforeEach(() => {
    counterStore.counters = {
      asdf: {id: "asdf", title: "bob", count: 1},
    };
  });

  describe('add', () => {
    it('calls the API with the title of the new counter', async () => {
      await counterStore.add();
      expect(api.addCounter.mock.calls.length).toEqual(1);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await counterStore.add();
      expect(counterStore.counters).toEqual(expectedCounters);
    });
  });

  describe('increment', () => {
    it('calls the API to increment the given counter', async () => {
      const id = 'asdf';
      await counterStore.increment(id);
      expect(api.incrementCounter.mock.calls.length).toEqual(1);
      expect(api.incrementCounter.mock.calls[0][0]).toEqual(id);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await counterStore.increment('asdf');
      expect(counterStore.counters).toEqual(expectedCounters);
    });

    it('optimistically updates store before API responds', () => {
      const id = 'asdf';
      expect(counterStore.counters[id].count).toEqual(1);
      counterStore.increment('asdf');
      expect(counterStore.counters[id].count).toEqual(2);
    });
  });

  describe('decrement', () => {
    it('calls the API to decrement the given counter', async () => {
      const id = 'asdf';
      await counterStore.decrement(id);
      expect(api.decrementCounter.mock.calls.length).toEqual(1);
      expect(api.decrementCounter.mock.calls[0][0]).toEqual(id);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await counterStore.decrement('asdf');
      expect(counterStore.counters).toEqual(expectedCounters);
    });
  });

  describe('delete', () => {
    it('calls the API to delete the given counter', async () => {
      const id = 'asdf';
      await counterStore.delete(id);
      expect(api.deleteCounter.mock.calls.length).toEqual(1);
      expect(api.deleteCounter.mock.calls[0][0]).toEqual(id);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await counterStore.delete('asdf');
      expect(counterStore.counters).toEqual(expectedCounters);
    });
  });
});