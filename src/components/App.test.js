import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

const counters = [
  {id: "asdf", title: "bob", count: 1},
  {id: "qwer", title: "steve", count: 2}
];

describe("with no counters", () => {
  it('renders the title and AddCounter component', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<App counters={[]} onAdd={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});

describe("with some counters", () => {
  it('renders the title, AddCounter, and each Counter', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<App counters={counters} onAdd={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});