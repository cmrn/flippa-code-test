import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import AddCounter from './AddCounter';
import counterStore from '../counterStore';

beforeEach(() => {
  counterStore.add = jest.fn();
});

basicComponentTests(<AddCounter />);

it('calls counterStore.add when onAdd callback is triggered', () => {
  const counterTitle = 'some title';
  const wrapper = shallow(<AddCounter />);
  wrapper.props().onAdd(counterTitle);
  expect(counterStore.add.mock.calls.length).toEqual(1);
  expect(counterStore.add.mock.calls[0][0]).toEqual(counterTitle);
});
