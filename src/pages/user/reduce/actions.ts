import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { getHttp } from "@/api/http";
import { ISearchData, IUserState } from "../interface";

export const UPDATE_USER_LIST = "updateUserList";

const updataUserListCreater = (data) => {
  return {
    type: UPDATE_USER_LIST,
    payload: data,
  };
};

export const getUserListCreater = (
  data: ISearchData
): ThunkAction<void, RooteState, unknown, any> => {
  return async (dispatch) => {
    const result = await getHttp<ISearchData, IUserState>({
      url: "user/list",
      query: data,
    });
    dispatch(updataUserListCreater(result.data));
  };
};
