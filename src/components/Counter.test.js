import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import Counter from './Counter';

const dummyProps = {
  title: 'A title',
  count: 161,
  onDecrement: () => {},
  onIncrement: () => {},
  onDelete: () => {},
}

basicComponentTests(<Counter {...dummyProps} />);

it('renders the counter with title, count, add, subtract, and remove buttons', () => {
  const wrapper = shallow(<Counter {...dummyProps} />);
  expect(wrapper).toMatchSnapshot();
});

describe('when subtract button is pressed', () => {
  it('calls onDecrement handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter {...dummyProps} onDecrement={handler} />);
    wrapper.find('.Counter-subtract').simulate('click');
    expect(handler.mock.calls.length).toBe(1);
  });
});

describe('when add button is pressed', () => {
  it('calls onIncrement handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter {...dummyProps} onIncrement={handler} />);
    wrapper.find('.Counter-add').simulate('click');
    expect(handler.mock.calls.length).toBe(1);
  });
});

describe('when delete button is pressed', () => {
  it('calls onDelete handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<Counter {...dummyProps} onDelete={handler} />);
    wrapper.find('.Counter-delete').simulate('click');
    expect(handler.mock.calls.length).toBe(1);
  });
});
