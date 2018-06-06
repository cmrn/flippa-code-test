import React from 'react';
import { shallow } from 'enzyme';

export default function basicComponentTests(component) {
  it('allows a className to be set', () => {
    const wrapper = shallow(React.cloneElement(component, { className: "classy" }));
    expect(wrapper.props().className).toEqual(expect.stringContaining('classy'));
  });

  it('passes through other props', () => {
    const wrapper = shallow(React.cloneElement(component, { foo: "bar" }));
    expect(wrapper.props().foo).toEqual('bar');
  });
}
