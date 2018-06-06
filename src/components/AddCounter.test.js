import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import AddCounter from './AddCounter';

basicComponentTests(<AddCounter onAdd={() => {}} />);

it('renders a text box and button', () => {
  const wrapper = shallow(<AddCounter onAdd={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

describe('with some text in the input field', () => {
  let wrapper, handler;
  const title = 'foo';

  beforeEach(() => {
    handler = jest.fn();
    wrapper = shallow(<AddCounter onAdd={handler} />);
    wrapper.find('.AddCounter-title').simulate('change', { target: { value: title }});
  });

  it('enables the submit button', () => {
    expect(wrapper.find('.AddCounter-button').props().disabled).toEqual(false);
  });

  describe('when the form is submitted', () => {
    beforeEach(() => {
      wrapper.find('.AddCounter').simulate('submit', { preventDefault: ()=>{} });
    });

    it('calls the onAdd handler', () => {
      expect(handler.mock.calls.length).toBe(1);
    });

    it('uses the title from the input', () => {
      expect(handler.mock.calls[0][0]).toEqual(title);
    });
  });
});

describe('with an empty input field', () => {
  it('disables the submit button', () => {
    const wrapper = shallow(<AddCounter onAdd={() => {}} />);
    expect(wrapper.find('.AddCounter-button').props().disabled).toEqual(true);
  });
});