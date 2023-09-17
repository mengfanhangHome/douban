export enum splitSym {
  HORIZONTAL = "-",
  COLON = ":",
}
// 时间补0
const _timeSupplementHandler = (s: number): string | number =>
  (s < 10 && `0${s}`) || s;

// 获取当前时间
export const getClock = (s: splitSym, date?: Date) => {
  if (!date) date = new Date();
  const H = _timeSupplementHandler(date.getHours());
  let mins = _timeSupplementHandler(date.getMinutes());
  let second = _timeSupplementHandler(date.getSeconds());
  return `${H}${s}${mins}${s}${second}`;
};
