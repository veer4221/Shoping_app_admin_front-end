import { authConstant } from "../actions/constants";
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
} = authConstant;

const initStage = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};
export default (state = initStage, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case LOGOUT_REQUEST:
      state = {
        ...initStage,
        loading: true,
      };
      break;
    case LOGOUT_SUCCESS:
      state = {
        ...initStage,
      };
      break;
    case LOGOUT_FAILURE:
      state = {
        ...initStage,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
};
