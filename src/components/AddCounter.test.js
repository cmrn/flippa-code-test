import React from 'react';
import renderer from 'react-test-renderer';
import AddCounter from './AddCounter';

it('renders a text box and button', () => {
  const tree = renderer.create(<AddCounter onAdd={() => {}} />);
  expect(tree).toMatchSnapshot();
});

describe('when the form is submitted', () => {
  it('calls the onAdd handler', () => {
    const handler = jest.fn();
    const tree = renderer.create(<AddCounter onAdd={handler} />);
    tree.root.children[0].props.onSubmit({ preventDefault: () => {}});
    expect(handler.mock.calls.length).toBe(1);
  });

  it('uses the title from the input', () => {
    const title = 'foo';
    const handler = jest.fn();
    const tree = renderer.create(<AddCounter onAdd={handler} />);
    tree.root.findByProps({type: 'text'}).props.onChange({ target: { value: title }});
    tree.root.children[0].props.onSubmit({ preventDefault: () => {}});
    expect(handler.mock.calls[0][0]).toEqual(title);
  });
});
