import React from 'react';
import AstronautName from '../components/AstronautName';
import renderer from 'react-test-renderer';

test('AstronautName renders as planned', () => {
  const onBlur = jest.fn();
  const updateField = jest.fn();
  const component = renderer.create(
    <AstronautName updateField={updateField} onBlur={onBlur} field="name" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});