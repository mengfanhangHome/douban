import {
  UPDATA_HOST_LIST,
  UPDATA_DETAIL_URL,
  UPDATA_SELECT_FORM,
} from "./homeAction";

import { ISelectForm } from "@/pages/home/interface";
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
  selectData: ISelectForm;
}
const defaultState: IHomeState = {
  hotList: [],
  detailUrl: "",
  //  搜索条件
  selectData: {
    title: "",
    rate: 0,
  },
};

export default (state = defaultState, action) => {
  const newState: IHomeState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case UPDATA_HOST_LIST:
      newState.hotList = action.payload.subjects;
      return newState;
    case UPDATA_DETAIL_URL:
      newState.detailUrl = action.payload;
      return newState;
    case UPDATA_SELECT_FORM: //  更新搜索条件
      newState.selectData = action.payload;
      return newState;
    default:
      return state;
  }
};
