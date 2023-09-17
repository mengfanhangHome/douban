import { UPDATA_HOST_LIST, UPDATA_DETAIL_URL } from "./homeAction";
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
  detailUrl: string;
}
const defaultState: IHomeState = {
  hotList: [],
  detailUrl: "",
};

export default (state = defaultState, action) => {
  const newState: IHomeState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case UPDATA_HOST_LIST:
      newState.hotList = action.payload.subjects;
      return newState;
    case UPDATA_DETAIL_URL:
      console.log(action.payload);
      newState.detailUrl = action.payload;
      return newState;
    default:
      return state;
  }
};
