import axios from "axios";
import { useDispatch } from "react-redux";
import axiosIntance from "../helpers/axios";
import { authConstant } from "./constants";
const {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} = authConstant;
export const login = (user) => {
  console.log(user);
  return async (dispach) => {
    dispach({ type: LOGIN_REQUEST });
    const res = await axiosIntance.post(`/admin/signin`, {
      ...user,
    });
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispach({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        dispach({
          type: LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispach) => {
    const token = localStorage.getItem(`token`);
    if (token) {
      const user = JSON.parse(localStorage.getItem(`user`));
      dispach({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispach({
        type: LOGIN_FAILURE,
        payload: "fail to login",
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    const res = await axiosIntance.post(`/admin/signout`);

    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
