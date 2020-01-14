import { onBlurFunc, curriedUpdateFieldFunc, postUserFunc } from './actions';
import { UPDATE_FIELD, UPDATE_ERRORS } from './constants';

describe('Test the identity', () => {
  test('on a scalar', () => {
    let identity = (x) => x;
    expect(identity('a')).toStrictEqual('a')
  });

  test('on an object', () => {
    let identity = (x) => x;
    expect(identity({ name: 'name', email: 'email'}))
    .toStrictEqual({ name: 'name', email: 'email'});
  });
});

describe('Curried update field', () => {
  test('curried update field', () => {
    const dispatch = jest.fn(x => x);
    curriedUpdateFieldFunc(dispatch)('name')('myName');
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toStrictEqual({
      type: UPDATE_FIELD,
      field: 'name',
      value: 'myName'
    });
  });
});

describe('onBlur', () => {
  test('should validate everything', () => {
    const dispatch = jest.fn(x => x);
    const form = {
      name: null,
      email: null,
      errors: {
        name: null,
        email: null
      }
    };
    onBlurFunc(dispatch)(form)();
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0]).toStrictEqual({
      type: UPDATE_ERRORS,
      errors: {
        name: "You need a name",
        email: "You need an email"
      }
    });
  });
});
