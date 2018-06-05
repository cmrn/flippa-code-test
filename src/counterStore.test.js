import counterStore from './counterStore';
import * as api from './api';

const data = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: -1}
];
const mockApi = () => jest.fn().mockImplementation(() => Promise.resolve(data));
api.getCounters = mockApi();
api.addCounter = mockApi();

afterEach(() => {
  counterStore.reset();
});

it('is initially empty', () => {
  expect(counterStore.counters).toEqual([]);
});

describe('load', () => {
  it('loads data from the API into the store', async () => {
    await counterStore.load();
    expect(counterStore.counters).toEqual(data);
    expect(api.getCounters.mock.calls.length).toEqual(1);
  });
});

describe('add', () => {
  it('calls the API with the title of the new counter', async () => {
    await counterStore.add();
    expect(api.addCounter.mock.calls.length).toEqual(1);
  });

  it('updates the counters with the response', async () => {
    expect(counterStore.counters).not.toEqual(data);
    await counterStore.add();
    expect(counterStore.counters).toEqual(data);
  });
});
