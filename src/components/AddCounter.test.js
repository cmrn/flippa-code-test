import React from 'react';
import { shallow } from 'enzyme';
import AddCounter from './AddCounter';

it('renders a text box and button', () => {
  const wrapper = shallow(<AddCounter onAdd={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

describe('when the form is submitted', () => {
  it('calls the onAdd handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(<AddCounter onAdd={handler} />);
    wrapper.find('.AddCounter').simulate('submit', { preventDefault: ()=>{} });
    expect(handler.mock.calls.length).toBe(1);
  });

  it('uses the title from the input', () => {
    const title = 'foo';
    const handler = jest.fn();
    const wrapper = shallow(<AddCounter onAdd={handler} />);
    wrapper.find('.AddCounter-title').simulate('change', { target: { value: title }});
    wrapper.find('.AddCounter').simulate('submit', { preventDefault: ()=>{} });
    expect(handler.mock.calls[0][0]).toEqual(title);
  });
});
