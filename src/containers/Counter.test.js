import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import counterStore from '../counterStore';


const data = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: -1}
];

beforeEach(() => {
  counterStore.counters = data;
  counterStore.add = jest.fn();
  counterStore.increment = jest.fn();
  counterStore.decrement = jest.fn();
  counterStore.delete = jest.fn();
});

it('loads counter from counterStore by id', () => {
  const wrapper = shallow(<Counter id='qwer' />);
  expect(wrapper).toMatchSnapshot();
});

describe('when increment event is triggered', () => {
  it('calls counterStore.increment() with counter ID', () => {
    const id = 'qwer';
    const wrapper = shallow(<Counter id={id} />);
    expect(counterStore.increment.mock.calls.length).toBe(0);
    wrapper.props().onIncrement();
    expect(counterStore.increment.mock.calls.length).toBe(1);
    expect(counterStore.increment.mock.calls[0][0]).toBe(id);
  });
});

describe('when decrement event is triggered', () => {
  it('calls counterStore.decrement() with counter ID', () => {
    const id = 'qwer';
    const wrapper = shallow(<Counter id={id} />);
    expect(counterStore.decrement.mock.calls.length).toBe(0);
    wrapper.props().onDecrement();
    expect(counterStore.decrement.mock.calls.length).toBe(1);
    expect(counterStore.decrement.mock.calls[0][0]).toBe(id);
  });
});

describe('when delete event is triggered', () => {
  it('calls counterStore.delete() with counter ID', () => {
    const id = 'qwer';
    const wrapper = shallow(<Counter id={id} />);
    expect(counterStore.delete.mock.calls.length).toBe(0);
    wrapper.props().onDelete();
    expect(counterStore.delete.mock.calls.length).toBe(1);
    expect(counterStore.delete.mock.calls[0][0]).toBe(id);
  });
});
