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
  let id;

  beforeEach(() => {
    id = 'asdf';
    counterStore.counters = {
      asdf: {id: "asdf", title: "bob", count: 1},
    };
  });

  describe('add', () => {
    const subject = () => counterStore.add();

    it('calls the API with the title of the new counter', async () => {
      await subject();
      expect(api.addCounter.mock.calls.length).toEqual(1);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await subject();
      expect(counterStore.counters).toEqual(expectedCounters);
    });
  });

  describe('increment', () => {
    const subject = () => counterStore.increment(id);

    it('calls the API to increment the given counter', async () => {
      await subject();
      expect(api.incrementCounter.mock.calls.length).toEqual(1);
      expect(api.incrementCounter.mock.calls[0][0]).toEqual(id);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await subject();
      expect(counterStore.counters).toEqual(expectedCounters);
    });

    it('optimistically increments count before API responds', () => {
      expect(counterStore.counters[id].count).toEqual(1);
      subject();
      expect(counterStore.counters[id].count).toEqual(2);
    });

    it('throws an error if the id is invalid', () => {
      id = 'invalid';
      return expect(subject()).rejects.toBeInstanceOf(Error);
    });
  });

  describe('decrement', () => {
    const subject = () => counterStore.decrement(id);

    it('calls the API to decrement the given counter', async () => {
      await subject();
      expect(api.decrementCounter.mock.calls.length).toEqual(1);
      expect(api.decrementCounter.mock.calls[0][0]).toEqual(id);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await subject();
      expect(counterStore.counters).toEqual(expectedCounters);
    });

    it('optimistically decrements count before API responds', () => {
      expect(counterStore.counters[id].count).toEqual(1);
      subject();
      expect(counterStore.counters[id].count).toEqual(0);
    });

    it('throws an error if the id is invalid', () => {
      id = 'invalid';
      return expect(subject()).rejects.toBeInstanceOf(Error);
    });
  });

  describe('delete', () => {
    const subject = () => counterStore.delete(id);

    it('calls the API to delete the given counter', async () => {
      await subject();
      expect(api.deleteCounter.mock.calls.length).toEqual(1);
      expect(api.deleteCounter.mock.calls[0][0]).toEqual(id);
    });

    it('updates the counters with the response', async () => {
      expect(counterStore.counters).not.toEqual(expectedCounters);
      await subject();
      expect(counterStore.counters).toEqual(expectedCounters);
    });
  });
});