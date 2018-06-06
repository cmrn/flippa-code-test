import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import App from './App';
import counterStore from '../counterStore';

beforeEach(() => {
  counterStore.counters = {};
  counterStore.load = jest.fn();
});

const counters = {
  asdf: {id: "asdf", title: "bob", count: 1},
  qwer: {id: "qwer", title: "steve", count: -1},
};

basicComponentTests(<App />);

it('calls load on the counterStore when mounted', () => {
  const wrapper = shallow(<App />);
  expect(counterStore.load.mock.calls.length).toBe(1);
});

it('passes counter IDs from the store to the child component', async () => {
  counterStore.counters = counters;
  const wrapper = shallow(<App />);
  expect(wrapper.props().counterIds).toEqual(['asdf', 'qwer']);
});
