import { IGoodItem } from "../interface";
import { GET_GOOD_LIST } from "./shopAction";

interface IDefaultData {
  goodList: IGoodItem[];
  goodCartList: IGoodItem[];
}
const defaultData: IDefaultData = {
  goodList: [],
  goodCartList: [], // TODO购物车列表
};

export default (state = defaultData, action) => {
  const newState: IDefaultData = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GET_GOOD_LIST:
      newState.goodList = action.payload;
      return newState;
    default:
      return state;
  }
};
