import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const counters = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: 2}
];

describe("with no counters", () => {
  it('renders the title and AddCounter component', () => {
    const wrapper = shallow(<App counters={[]} onAdd={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("with some counters", () => {
  it('renders the title, AddCounter, and each Counter', () => {
    const wrapper = shallow(<App counters={counters} onAdd={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});