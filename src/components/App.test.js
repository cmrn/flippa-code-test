import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AddCounter from './AddCounter';
import Counter from '../containers/Counter';

const dummyProps = {
  counters: [],
  onAdd: () => {},
  onChange: () => {}
}

it("propogates the onAdd event", () => {
  const addHandler = jest.fn();
  const eventValue = 'some payload';
  const wrapper = shallow(<App {...dummyProps} onAdd={addHandler} />);
  wrapper.find(AddCounter).props().onAdd(eventValue);
  expect(addHandler.mock.calls.length).toBe(1);
  expect(addHandler.mock.calls[0][0]).toEqual(eventValue);
});

describe("with no counters", () => {
  it('renders the title and AddCounter component', () => {
    const wrapper = shallow(<App {...dummyProps} counters={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("with some counters", () => {
  const counters = [
    {id: "asdf", title: "bob", count: 1},
    {id: "qwer", title: "steve", count: 2}
  ];

  it('renders the title, AddCounter, and each Counter', () => {
    const wrapper = shallow(<App {...dummyProps} counters={counters} />);
    expect(wrapper).toMatchSnapshot();
  });
});