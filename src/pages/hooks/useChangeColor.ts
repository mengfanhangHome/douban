import { getClock, splitSym } from "@/utils/tools";

enum colors {
  DRAKNESS = "#242424", //  夜晚的背景色
  WHITE = "#fff", // 白天的背景色
  DISABLEDNGITHTEXT = "#505358", // 夜间禁用文字颜色
  DISABLEDNOONTEXT = "#c2cad6", // 白天禁用文字颜色
}

// 是否是夜间判断
function _isNight(pointTime: number): boolean {
  const timer = getClock(splitSym.COLON);
  const h = timer.split(splitSym.COLON)[0] || 0;
  const hSym = Number(h);
  return hSym > pointTime;
}

//  设置label颜色
export function useLabelColor(pointTime: number): string {
  return (_isNight(pointTime) && colors.WHITE) || colors.DRAKNESS;
}
//  设置背景颜色
export function useBackgroundColor(pointTime: number): string {
  return (_isNight(pointTime) && colors.DRAKNESS) || colors.WHITE;
}
//  设置禁用状态下的字体颜色
export function useDisableColor(pointTime: number): string {
  return (
    (_isNight(pointTime) && colors.DISABLEDNGITHTEXT) || colors.DISABLEDNOONTEXT
  );
}
