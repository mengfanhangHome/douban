import { ThunkAction } from "redux-thunk";
import { RooteState } from "@/redux/store";
import { ILoginData } from "./interface";
import { postHttp } from "@/api/http";
import { history } from "@/router/history";
import { message } from "antd";

export enum LoginTypes {
  LOGINACTION = "LOGINACTION",
}

export const loginActionCreater = (loginData: ILoginData) => {
  return {
    type: LoginTypes.LOGINACTION,
    payload: loginData,
  };
};
//  登录操作
export const loginHandlerCreater = (
  loginData: ILoginData
): ThunkAction<void, RooteState, unknown, any> => {
  return async (dispatch) => {
    const result = await postHttp({
      url: "/user/login",
      query: loginData,
    });
    message.success(result.message);
    history.push("/home/t50");
  };
};
//  注册
export const registerActionCreater = (
  registerData: ILoginData
): ThunkAction<void, RooteState, unknown, any> => {
  return async (dispatch) => {
    const result = await postHttp({
      url: "/user/register",
      query: registerData,
    });
    history.push("/home/t50");
  };
};
