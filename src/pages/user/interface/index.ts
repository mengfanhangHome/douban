export interface ISearchData {
  userId: string;
}
export interface IUserItem {
  userId: string;
  gender?: string;
  age?: number;
  description?: string;
}
export interface IUserState {
  userList: IUserItem[];
}
