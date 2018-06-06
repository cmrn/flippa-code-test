import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import Total from './Total';

basicComponentTests(<Total total={123} />);

it('renders the total', () => {
  const wrapper = shallow(<Total total={123} />);
  expect(wrapper).toMatchSnapshot();
});
