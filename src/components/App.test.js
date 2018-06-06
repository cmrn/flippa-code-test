import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import App from './App';
import AddCounter from './AddCounter';
import Counter from '../containers/Counter';

const dummyProps = {
  counters: {}
}

basicComponentTests(<App {...dummyProps} />);

describe("with no counters", () => {
  it('renders the title and AddCounter component', () => {
    const wrapper = shallow(<App {...dummyProps} counters={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("with some counters", () => {
  const counters = {
    asdf: {id: "asdf", title: "bob", count: 1},
    qwer: {id: "qwer", title: "steve", count: -1},
  };

  it('renders the title, AddCounter, and each Counter', () => {
    const wrapper = shallow(<App {...dummyProps} counters={counters} />);
    expect(wrapper).toMatchSnapshot();
  });
});