import axiosIntance from "../helpers/axios";
import { authConstant, userContants } from "./constants";
import { useDispatch } from "react-redux";

const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} = userContants;
export const signup = (user) => {
  // console.log(user);
  return async (dispach) => {
    dispach({ type: USER_REGISTER_REQUEST });
    const res = await axiosIntance.post(`/admin/signup`, {
      ...user,
    });
    // console.log(res);
    if (res.status === 201) {
      const { message } = res.data;
      console.log(message);

      dispach({
        type: USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispach({
          type: USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
