import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Counter from './Counter';

it('renders the counter with title, count, add, subtract, and remove buttons', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Counter title="A title" count={161} />);
  expect(tree).toMatchSnapshot();
});
