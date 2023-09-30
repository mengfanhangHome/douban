import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { message } from "antd";
import { getHttp, postHttp } from "@/api/http";
import {
  ISelectForm,
  IMoveResult,
  IAddMovieItem,
  IRateParams,
} from "@/pages/home/interface";

export const GET_HOT = "getHost"; //  获取hot列表
export const ADDDATA_HOST_LIST = "addDataHostList"; //  新增hostlist
export const UPDATA_HOST_LIST = "upDataHostList"; //  更新hostList
export const UPDATA_DETAIL_URL = "upDataDetailUrl"; //  更新详情页的http爬虫目标地址
export const UPDATA_SELECT_FORM = "upDataSelectForm"; // 更新搜索条件数据
export const DELETE_HOST_LIST = "deleteHostList"; // 删除
export const UPDATE_HOST_RATE = "updateHostRate"; // 更新评分

//  更新评分
export const updateHostRateHandler =
  (rateParams: IRateParams): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    try {
      await postHttp({
        url: "/movie/update/rate",
        query: rateParams,
      });
      message.success("更新成功");
      const reloadAction = getHotCreater();
      dispatch(reloadAction);
    } catch (error) {
      message.error("更新失败");
    }
  };

//  更新selectForm
export const updataSelectForm = (selectPart: ISelectForm) => {
  return {
    type: UPDATA_SELECT_FORM,
    payload: selectPart,
  };
};
//  删除list (接受一个id数组)
export const deleteHotCreater =
  (ids: string[]): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    try {
      await postHttp({
        url: "/movie/del",
        query: { ids },
      });
      message.success("删除成功");
      // TOD 重新获取列表
      const reloadAction = getHotCreater();
      dispatch(reloadAction);
    } catch (error) {
      message.error("删除失败");
    }
  };
//  新增hostList
export const addHotCreater =
  (addData: IAddMovieItem): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    try {
      await postHttp({
        url: `/movie/addHost`,
        query: addData,
      });
      message.success("新增成功");
      // TOD 重新获取列表
      const reloadAction = getHotCreater();
      dispatch(reloadAction);
    } catch (error) {
      message.error(error);
    }
  };

// 查询列表默认值
const defaultSelectData: ISelectForm = {
  title: "",
  rate: 0,
};
//  请求hostlist
export const getHotCreater =
  (
    selectData = defaultSelectData
  ): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    const res = await getHttp<ISelectForm, IMoveResult>({
      url: `/movie/list`,
      query: selectData,
    });
    if (res) {
      const action = {
        type: UPDATA_HOST_LIST,
        payload: res.data,
      };
      dispatch(action);
    }
  };
