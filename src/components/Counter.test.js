import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import { DESTRUCTION } from 'dns';

it('renders the counter with title, count, add, subtract, and remove buttons', () => {
  const wrapper = shallow(<Counter title="A title" count={161} onChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

describe('when subtract button is pressed', () => {
  it('calls onChange handler with the new value', () => {
    const changeHandler = jest.fn();
    const count = 10;
    const wrapper = shallow(<Counter title="A title" count={count} onChange={changeHandler} />);
    wrapper.find('.Counter-subtract').simulate('click');
    expect(changeHandler.mock.calls.length).toBe(1);
    expect(changeHandler.mock.calls[0][0]).toBe(count-1);
  });
});

describe('when add button is pressed', () => {
  it('calls onChange handler with the new value', () => {
    const changeHandler = jest.fn();
    const count = 10;
    const wrapper = shallow(<Counter title="A title" count={count} onChange={changeHandler} />);
    wrapper.find('.Counter-add').simulate('click');
    expect(changeHandler.mock.calls.length).toBe(1);
    expect(changeHandler.mock.calls[0][0]).toBe(count+1);
  });
});
