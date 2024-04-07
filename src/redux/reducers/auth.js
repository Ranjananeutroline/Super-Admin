// reducers/auth.js
const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  adminUser:null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, isLoading: true, error: null };
    case 'AUTH_SUCCESS':
      return { ...state, isLoading: false, isLoggedIn: true, user: action.payload, error: null };
    case 'AUTH_FAIL':
      return { ...state, isLoading: false, isLoggedIn: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, isLoggedIn: false };
      case 'USER_UPDATE':
        return {...state, isLoggedIn:true, user:action.payload, error:null}
        case 'SET_ADMIN_USER':
          return {
            ...state,
            adminUser: action.payload
          };
        default:
      return state;
  }
};

export default authReducer;
