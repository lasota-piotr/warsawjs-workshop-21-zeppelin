import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const DEFAULT_AUTH_STATE = {
  username: 'test',
  isPending: false
};

const auth = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return { ...state, username: null, isPending: true };
    case actionTypes.LOGIN_END:
      return action.error
        ? {
            ...state,
            username: null,
            isPending: false
          }
        : {
            ...state,
            username: action.payload.username,
            isPending: false
          };
    case actionTypes.LOGOUT:
      return DEFAULT_AUTH_STATE;
    default:
      return state || DEFAULT_AUTH_STATE;
  }
};

const DEFAULT_PROJECTS_STATE = {
  items: [],
  isPending: false
};

const projects = (state, action) => {
  switch (action.type) {
    case actionTypes.READ_PROJECT_LIST_START:
      return { ...state, isPending: true };
    case actionTypes.READ_PROJECT_LIST_END:
      return action.error
        ? {
            ...state,
            isPending: false
          }
        : {
            ...state,
            items: action.payload.posts,
            isPending: false
          };
    default:
      return state || DEFAULT_PROJECTS_STATE;
  }
};

export default combineReducers({
  auth,
  projects
});
