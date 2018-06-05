import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import * as api from '../api';

const data = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: -1}
];
const mockApi = () => jest.fn().mockImplementation(() => Promise.resolve(data));
api.getCounters = mockApi();
api.addCounter = mockApi();

it('calls the API when mounted', () => {
  const wrapper = shallow(<App />);
  expect(api.getCounters.mock.calls.length).toBe(1);
});

it('initialises child with an empty array of counters', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.props().counters).toEqual([]);
});

it('passes counters to the child component once API returns', async () => {
  const wrapper = mount(<App />);
  await api.getCounters(); // force test to wait until after API returns data
  wrapper.update();
  expect(wrapper.childAt(0).props().counters).toEqual(data);
});

it('calls addCounter when onAdd callback is triggered', () => {
  const counterTitle = 'some title';
  const wrapper = shallow(<App />);
  wrapper.props().onAdd(counterTitle);
  expect(api.addCounter.mock.calls.length).toEqual(1);
  expect(api.addCounter.mock.calls[0][0]).toEqual(counterTitle);
});
