import {
  UPDATE_FIELD,
  UPDATE_ERRORS,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAIL
} from "./constants";

import {
  postUserCall
} from "./api";

export const updateField = (dispatch, field, value) => {
  dispatch({
    type: UPDATE_FIELD,
    field,
    value
  });
}

// do this right according to blog
const astronautValidationErrors = (form) => {
  let errors = {
    name: null,
    email: null
  };
  if (!form.name) {
    errors.name = "You need a name"
  };
  if (!form.email) {
    errors.email = "You need an email"
  }
  if (form.email && !form.email.includes('@')) {
    errors.email = "Invalid email address"
  }
  return errors;
}

const astronautIsValid = (errors) => {
  return !errors.name && !errors.email;
}

const validateAstronaut = (dispatch, form) => {
  const errors = astronautValidationErrors(form);
  dispatch({type: UPDATE_ERRORS,
            errors});
}

const postUser = async (dispatch, form) => {
  // first we need to validate
  const errors = astronautValidationErrors(form);
  dispatch({type: UPDATE_ERRORS,
            errors
  });
  if (!astronautIsValid(errors)) {
    return;
  }

  // then make the request
  dispatch({type: POST_USER_REQUEST});
  try {
    const response = await postUserCall({
      name: form.name,
      email: form.email
    });
    const res = await response.json();
    dispatch({type: POST_USER_SUCCESS, payload: res});
  } catch (e) {
    dispatch({type: POST_USER_FAIL, payload: e});
  }
}

export const onBlurFunc = dispatch => form => {
  return () => validateAstronaut(dispatch, form);
}

export const curriedUpdateFieldFunc = dispatch => field => {
  return (value) => updateField(dispatch, field, value);
};

export const postUserFunc = dispatch => {
  return form => postUser(dispatch, form);
}
