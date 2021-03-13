import { authConstant } from "../actions/constants";
const { LOGIN_REQUEST, LOGIN_SUCCESS } = authConstant;

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
  }
  return state;
};
