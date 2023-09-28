export type movieType = "t50" | "code50";
export interface IMovieType {
  type: movieType;
}

// 电影搜索条件
export interface ISelectForm {
  title: string;
  rate: number;
}

export interface IMovieListItem {
  title: string;
  rate: string;
  url: string;
  cover: string;
  id: string;
}

export interface IMoveResult {
  subject: IMovieListItem[];
}

//  新增电影值
export interface IAddMovieItem {
  title: string;
  url: string;
  cover: string;
}

//  更新rate
export interface IRateParams {
  rate: string;
  id: string;
}
