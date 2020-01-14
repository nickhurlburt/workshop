import {
  UPDATE_FIELD,
  UPDATE_ERRORS,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAIL
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value
        }
      }
    case UPDATE_ERRORS:
      return {
        ...state,
        form: {
          ...state.form,
          errors: action.errors
        }
      }
    case POST_USER_REQUEST: 
      return {
        ...state,
        postUser: {
          isLoading: true,
          error: null,
          data: null
        }
      }
    case POST_USER_SUCCESS:
      return {
        ...state,
        postUser: {
          isLoading: false,
          error: false,
          data: action.payload
        }
      }
    case POST_USER_FAIL:
      return {
        ...state,
        postUser: {
          isLoading: false,
          error: action.payload,
          data: false
        }
      }

    default: return state;
  }
}

export default reducer;
