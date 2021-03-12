import { useDispatch } from "react-redux";
import { authConstant } from "./constants";
const { LOGIN_REQUEST } = authConstant;

export const login = (user) => {
  console.log(user);
  return (dispach) => {
    dispach({
      type: LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};
