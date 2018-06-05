import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import * as api from '../api';
import counterStore from '../counterStore';

beforeEach(() => {
  counterStore.reset();
});

const data = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: -1}
];
const mockApi = () => jest.fn().mockImplementation(() => Promise.resolve(data));
api.getCounters = mockApi();
api.addCounter = mockApi();

counterStore.load = jest.fn();
counterStore.add = jest.fn();

it('calls load on the counterStore when mounted', () => {
  const wrapper = shallow(<App />);
  expect(counterStore.load.mock.calls.length).toBe(1);
});

it('passes counters from the store to the child component', async () => {
  counterStore.counters = data;
  const wrapper = shallow(<App />);
  expect(wrapper.props().counters).toEqual(data);
});

it('calls counterStore.add when onAdd callback is triggered', () => {
  const counterTitle = 'some title';
  const wrapper = shallow(<App />);
  wrapper.props().onAdd(counterTitle);
  expect(counterStore.add.mock.calls.length).toEqual(1);
  expect(counterStore.add.mock.calls[0][0]).toEqual(counterTitle);
});
