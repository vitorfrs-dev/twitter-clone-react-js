const INIT_STATE = {
  signed: false,
  token: null,
  loading: false,
};

export default function auth(state = INIT_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return { ...state, loading: true };
    case '@auth/SIGN_IN_REQUEST_SUCCESS':
      return {
        ...state,
        signed: true,
        loading: false,
        token: action.payload.token,
      };
    case '@auth/SIGN_IN_REQUEST_FAILURE':
      return {
        ...state,
        signed: false,
        loading: false,
        token: null,
      };
    case '@auth/SIGN_OUT':
      return {
        ...state,
        signed: false,
        loading: false,
        token: null,
      };
    default:
      return state;
  }
}
