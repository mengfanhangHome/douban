import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { getHttp } from "@/api/http";
import { IDetailParams } from "@/pages/detail/interface";

export const GET_DETAIL = "getDetail"; // TOD获取详情

export const getDetail =
  <T>(options: T): ThunkAction<void, RooteState, unknown, any> =>
  async (dispatch) => {
    const res = await getHttp({
      url: options.url,
      query: options.query,
    });
    if (res) {
      const action = {
        type: GET_DETAIL,
        payload: res,
      };
      dispatch(action);
    }
  };
