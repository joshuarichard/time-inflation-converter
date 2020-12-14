import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from 'chai';
import App from './App';
import { Paragraph } from './components/styled';

test('renders edit src/App.tsx alert', () => {
  const render = renderer.create(<App />);
  const paragraph = render.root.findByType(Paragraph);
  const kids = paragraph.props.children;
  expect(kids[0]).to.equal('Edit ');
  expect(kids[1])
    .to.have.property('props')
    .that.has.property('children')
    .that.equals('src/App.tsx');
  expect(kids[2]).to.equal(' and save to reload.');
});
