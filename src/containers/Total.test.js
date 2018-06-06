import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import Total from './Total';
import counterStore from '../counterStore';

basicComponentTests(<Total />);

describe('when the store is empty', () => {
  beforeEach(() => {
    counterStore.reset();
  });
  
  it('sets total to 0', async () => {
    const wrapper = shallow(<Total />);
    expect(wrapper.props().total).toEqual(0);
  });
});

describe('when the store has some counters', () => {
  const counters = {
    asdf: {id: "asdf", title: "bob", count: 3},
    qwer: {id: "qwer", title: "steve", count: 5},
  };
  
  beforeEach(() => {
    counterStore.counters = counters;
  });
  
  it('calculates the total from the store', async () => {
    const wrapper = shallow(<Total />);
    expect(wrapper.props().total).toEqual(8);
  });
});
