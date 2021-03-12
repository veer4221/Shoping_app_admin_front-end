import { authConstant } from "../actions/constants";
const { LOGIN_REQUEST } = authConstant;

const initStage = {
  name: "veer",
};
export default (state = initStage, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      };
      break;
  }
  return state;
};
