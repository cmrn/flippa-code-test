import React from 'react';
import { shallow } from 'enzyme';
import basicComponentTests from '../basicComponentTests';
import App from './App';
import AddCounter from './AddCounter';
import Counter from '../containers/Counter';

const dummyProps = {
  counterIds: []
}

basicComponentTests(<App {...dummyProps} />);

describe("with no counters", () => {
  it('renders the title and AddCounter component', () => {
    const wrapper = shallow(<App {...dummyProps} counterIds={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("with some counters", () => {
  const counterIds = ['asdf', 'qwer'];

  it('renders the title, AddCounter, and each Counter', () => {
    const wrapper = shallow(<App {...dummyProps} counterIds={counterIds} />);
    expect(wrapper).toMatchSnapshot();
  });
});