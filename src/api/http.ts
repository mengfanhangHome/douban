import axios from "axios";

interface _IOptions<T> {
  url: string;
  query?: T;
}
// TODO: 解析get请求参数
const _joinQuery = <T>(query: T): string => {
  const params = { value: "" };
  for (const key in query) {
    params.value += `${key}=${query[key]}&`;
  }
  return `?${params.value.slice(0, params.value.length - 1)}`;
};
//  get请求
export function getHttp<T>(options: _IOptions<T>): Promise<T> {
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
