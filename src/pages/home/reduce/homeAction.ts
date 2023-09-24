import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { getHttp } from "@/api/http";
import { movieType, ISelectForm, IMoveResult } from "@/pages/home/interface";

export const GET_HOT = "getHost"; //  获取hot列表
export const UPDATA_HOST_LIST = "upDataHostList"; //  更新hostList
export const UPDATA_DETAIL_URL = "upDataDetailUrl"; //  更新详情页的http爬虫目标地址
export const UPDATA_SELECT_FORM = "upDataSelectForm"; // 更新搜索条件数据

//  更新selectForm
export const updataSelectForm = (selectPart: ISelectForm) => {
  return {
    type: UPDATA_SELECT_FORM,
    payload: selectPart,
  };
};

export const getHotCreater =
  (
    type: movieType,
    selectData: ISelectForm
  ): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    const res = await getHttp<ISelectForm, IMoveResult>({
      url: `http://localhost:1000/api/movie/${type}`,
      query: selectData,
    });
    if (res) {
      const action = {
        type: UPDATA_HOST_LIST,
        payload: res,
      };
      dispatch(action);
    }
  };
