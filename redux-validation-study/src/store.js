import { createStore } from 'redux'
import reducer from './reducers';

const initialState = {
  form: {
    name: null,
    email: null,
    errors: {
      name: null,
      email: null
    },
  },
  postUser: {
    isLoading: null,
    error: null,
    data: null
  }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;