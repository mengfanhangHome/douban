import { fromJS, FromJS } from "immutable";
import { IUserState } from "../interface";
import { UPDATE_USER_LIST } from "./actions";

const defaultState: FromJS<IUserState> = fromJS({
  userList: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_USER_LIST:
      const newState = state.merge({
        userList: action.payload,
      });
      return newState;
    default:
      return state;
  }
};
