export enum Meat {
  UPDATE_DARK_FLAG = "updateDarkFlag", // 更新夜间模式
}
//   切换暗夜模式
export const toggleDarkHandler = (flag: boolean) => {
  return {
    type: Meat.UPDATE_DARK_FLAG,
    payload: flag,
  };
};
