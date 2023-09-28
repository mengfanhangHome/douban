import { Meat } from "./globalActions";

interface IState {
  isDark: boolean;
}

interface IAction {
  type: Meat;
  payload: any;
}

const defaultState: IState = {
  isDark: false,
};

export default (state = defaultState, action: IAction) => {
  const newState: IState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case Meat.UPDATE_DARK_FLAG:
      newState.isDark = action.payload;
      return newState;
    default:
      return state;
  }
};
