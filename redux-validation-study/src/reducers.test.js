import reducer from './reducers';
import {
  UPDATE_FIELD
} from "./constants";

describe('The UPDATE_FIELD type', () => {
  test('updates an initial field', () => {
    const state = {
      form: {
        name: null,
        email: null
      }
    };
    const action = {
      type: UPDATE_FIELD,
      field: 'name',
      value: 'myName'
    };
    expect(reducer(state, action)).toStrictEqual({
      form: {
        name: 'myName',
        email: null
      }
    });
  });
});

