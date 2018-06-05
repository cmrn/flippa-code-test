import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

it('renders the app', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<App counters={[]} onAdd={() => {}} />);
  expect(tree).toMatchSnapshot();
});