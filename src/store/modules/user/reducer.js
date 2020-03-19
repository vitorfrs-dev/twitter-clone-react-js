const INIT_STATE = {
  name: '',
  email: '',
};

export default function user(state = INIT_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST_SUCCESS':
      return {
        ...state,
        name: action.payload.user.name,
        email: action.payload.user.email,
        avatar: action.payload.user.avatarUrl || null,
      };
    case '@auth/SIGN_OUT':
      return {
        name: '',
        email: '',
      };
    default:
      return state;
  }
}
