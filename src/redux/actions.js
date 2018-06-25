import * as actionTypes from "./actionTypes";
import { createAction } from "redux-actions";
import * as api from "../api";

const loginStart = createAction(actionTypes.LOGIN_START);
const loginEnd = createAction(actionTypes.LOGIN_END);
export const logout = createAction(actionTypes.LOGOUT);

export const login = ({ username, password }) => async dispatch => {
  dispatch(loginStart());
  const result = await api.login({ username, password });
  try {
    if (!result.ok) {
      return dispatch(loginEnd(new Error(result.errors.join("\n"))));
    }
    return dispatch(loginEnd(result));
  } catch (e) {
    return dispatch(loginEnd(e));
  }
};

const readProjectListStart = createAction(actionTypes.READ_PROJECT_LIST_START);
const readProjectListEnd = createAction(actionTypes.READ_PROJECT_LIST_END);

export const readProjectList = () => async dispatch => {
  dispatch(readProjectListStart());
  const result = await api.readPostList();
  console.log(result);
  try {
    if (!result.ok) {
      return dispatch(readProjectListEnd(new Error(result.errors.join("\n"))));
    }
    return dispatch(readProjectListEnd(result));
  } catch (e) {
    return dispatch(readProjectListEnd(e));
  }
};
