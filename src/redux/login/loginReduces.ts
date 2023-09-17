import { LoginTypes } from "./types";

export interface IAction {
  type: LoginTypes;
}

const defaultState = {
  username: "",
  password: "",
};

export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case LoginTypes.LOGINACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
