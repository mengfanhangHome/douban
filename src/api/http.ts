import axios from "axios";

interface _IOptions<T> {
  url: string;
  query?: T;
}
// TODO: 解析get请求参数

axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data;
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
export function getHttp<T, U>(options: _IOptions<T>): Promise<U> {
  return new Promise((resolve, reject) => {
    const queryString = (options.query && _joinQuery<T>(options.query)) || "";
    axios.get(`${options.url}${queryString}`).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject({
          error: 1,
        });
      }
    });
  });
}
// post请求
export const postHttp = axios.post;
