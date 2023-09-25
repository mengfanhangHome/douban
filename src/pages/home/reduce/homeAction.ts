import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { message } from "antd";
import { getHttp, postHttp } from "@/api/http";
import {
  movieType,
  ISelectForm,
  IMoveResult,
  IAddMovieItem,
} from "@/pages/home/interface";

export const GET_HOT = "getHost"; //  获取hot列表
export const ADDDATA_HOST_LIST = "addDataHostList"; //  新增hostlist
export const UPDATA_HOST_LIST = "upDataHostList"; //  更新hostList
export const UPDATA_DETAIL_URL = "upDataDetailUrl"; //  更新详情页的http爬虫目标地址
export const UPDATA_SELECT_FORM = "upDataSelectForm"; // 更新搜索条件数据
export const DELETE_HOST_LIST = "deleteHostList"; // 删除

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
  async () => {
    try {
      await postHttp({
        url: "/movie/del",
        query: { ids },
      });
      message.success("删除成功");
      // TOD 重新获取列表
      getHotCreater("t50", {
        title: "",
        rate: 0,
      });
    } catch (error) {
      message.error("删除失败");
    }
  };
//  新增hostList
export const addHotCreater =
  (addData: IAddMovieItem): ThunkAction<void, RooteState, unknown, any> =>
  async () => {
    try {
      await postHttp({
        url: `/movie/addHost`,
        query: addData,
      });
      message.success("新增成功");
      // TOD 重新获取列表
      getHotCreater("t50", {
        title: "",
        rate: 0,
      });
    } catch (error) {
      message.error(error);
    }
  };

//  请求hostlist
export const getHotCreater =
  (
    type: movieType,
    selectData: ISelectForm
  ): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    const res = await getHttp<ISelectForm, IMoveResult>({
      url: `/movie/${type}`,
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
