import { getHttp } from "@/api/http";
import { IGoodItem } from "../interface";

export const GET_GOOD_LIST = "get_good_list"; //  更新商品列表
export const Add_TO_GOOD_CART = "add_good_cart"; //  添加购物车

// TODO:更新商品列表
export const updataGoodListCreater = (goodList: IGoodItem[]) => {
  return {
    type: GET_GOOD_LIST,
    payload: goodList,
  };
};
//  获取商品列表
export const goodListCreater = (url: string) => async (dispatch) => {
  const result: { goods: IGoodItem[] } = await getHttp({
    url,
  });
  const action = updataGoodListCreater(result.goods);
  dispatch(action);
};

// TODO:添加到购物车action
export const addToGoodCart = (good: IGoodItem) => {
  return {
    type: Add_TO_GOOD_CART,
    payload: good,
  };
};
