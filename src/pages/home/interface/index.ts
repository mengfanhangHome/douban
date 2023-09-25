export type movieType = "t50" | "code50";
export interface IMovieType {
  type: movieType;
}

// 电影搜索条件
export interface ISelectForm {
  title: string;
  rate: number;
}

export interface IMovieList {
  title: string;
  rate: number;
  url: string;
  cover: string;
  id: number;
}

export interface IMoveResult {
  subject: IMovieList[];
}

//  新增电影值
export interface IAddMovieItem {
  title: string;
  url: string;
  cover: string;
}
