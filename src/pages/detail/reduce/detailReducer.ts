import { UPDATA_HOST_LIST } from "./detailAction";
export interface IHotItem {
  episodes_info: string;
  rate: string;
  cover_x: number;
  title: string;
  url: string;
  playable: boolean;
  cover: string;
  id: string;
  cover_y: number;
  is_new: Boolean;
}

export interface IHomeState {
  hotList: IHotItem[];
}
const defaultState: IHomeState = {
  hotList: [],
};

export default (state = defaultState, action) => {
  const newState: IHomeState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case UPDATA_HOST_LIST:
      newState.hotList = action.payload.subjects;
      return newState;
    default:
      return state;
  }
};
