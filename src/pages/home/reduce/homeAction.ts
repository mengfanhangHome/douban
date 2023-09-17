import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { getHttp } from "@/api/http";
import { movieType } from "@/pages/home/interface";

interface IUpdataDetailUrl {
  type: string;
  payload: string;
}

export const GET_HOT = "getHost"; //  获取hot列表
export const UPDATA_HOST_LIST = "upDataHostList"; //  更新hostList
export const UPDATA_DETAIL_URL = "upDataDetailUrl"; //  更新详情页的http爬虫目标地址

export const updataDetailUrlCreater = (path: string): IUpdataDetailUrl => {
  return {
    type: UPDATA_DETAIL_URL,
    payload: path,
  };
};

export const getHotCreater =
  (type: movieType): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    const res = await getHttp({
      url: `http://localhost:1000/api/movie/${type}`,
    });
    if (res) {
      const action = {
        type: UPDATA_HOST_LIST,
        payload: res,
      };
      dispatch(action);
    }
  };
