import axios, { AxiosResponse } from "axios";
import { Redirect } from "react-router-dom";
import { message } from "antd";

interface _IOptions<T> {
  url: string;
  query?: T;
}
interface _Response<T> {
  status: number;
  data: T | null;
  message: string;
}
// TODO: 解析get请求参数

const instance = axios.create({
  baseURL: "http://localhost:1000/api",
});

instance.interceptors.response.use((res) => {
  console.log(res, "res");
  if (res.status && res.data.status === 401) {
    message.error("未登录");
    // window.location.href = "http://localhost:1000/login";
  } else if (res.status && res.data.status === 200) {
    return res.data;
  } else {
    message.error(res.data.message);
    throw new Error(res.data.message);
  }
});

const _joinQuery = <T>(query: T): string => {
  const params = { value: "" };
  for (const key in query) {
    params.value += `${key}=${query[key]}&`;
  }
  return `?${params.value.slice(0, params.value.length - 1)}`;
};
//  TODO: get请求
//  TODO: T 是query的类型（好像不用传递，对外部调用没有什么类型推断作用），U是返回值类型
export function getHttp<T, U>(options: _IOptions<T>): Promise<_Response<U>> {
  return new Promise((resolve) => {
    const queryString = (options.query && _joinQuery<T>(options.query)) || "";
    instance
      .get<any, _Response<U>>(`${options.url}${queryString}`)
      .then((res) => {
        resolve(res);
      });
  });
}
// post请求
export function postHttp<T, U>(options: _IOptions<T>): Promise<_Response<U>> {
  return new Promise((resolve) => {
    instance.post<any, _Response<U>>(options.url, options.query).then((res) => {
      console.log(res, "postttt");
      if (res.status === 200) {
        resolve(res);
      }
    });
  });
}
