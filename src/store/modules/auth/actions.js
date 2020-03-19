export const signInRequest = (email, password) => {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
};

export const signInSuccess = payload => {
  return {
    type: '@auth/SIGN_IN_REQUEST_SUCCESS',
    payload,
  };
};

export const signInFailure = () => {
  return {
    type: '@auth/SIGN_IN_REQUEST_FAILURE',
  };
};

export const signOut = () => {
  return { type: '@auth/SIGN_OUT' };
};
