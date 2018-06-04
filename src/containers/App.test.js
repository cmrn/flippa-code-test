import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import * as api from '../api';

const data = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: -1}
];

api.getCounters = jest.fn().mockImplementation(() => Promise.resolve(data));

it('calls the API when mounted', async () => {
  const tree = renderer.create(<App />);
  expect(api.getCounters.mock.calls.length).toBe(1);
});

it('initialises child with an empty array of counters', async () => {
  const tree = renderer.create(<App />);
  expect(tree.root.children[0].props.counters).toEqual([]);
});

it('passes counters to the child component once API returns', async () => {
  const tree = renderer.create(<App />);
  await api.getCounters(); // force test to wait until after API returns data
  expect(tree.root.children[0].props.counters).toEqual(data);
});