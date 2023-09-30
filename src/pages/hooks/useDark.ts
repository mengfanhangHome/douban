//  夜间模式监听器(仅适用于macOS)
//  @return isDark: boolean
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleDarkHandler } from "@/redux/global/globalActions";

const _darkModeQuery =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

export const useDark = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    _darkModeQuery.addListener(_watchFn);
    _switchHandler(_darkModeQuery.matches); // TODO：初始化时候执行一下
    return () => {
      _darkModeQuery.removeListener(_watchFn);
    };
  }, []);
  //  执行函数
  const _switchHandler = (flag: boolean) => {
    const action = toggleDarkHandler(flag);
    dispatch(action);
  };
  //  监听回调函数
  const _watchFn = (e: MediaQueryListEvent) => {
    _switchHandler(e.matches);
  };
};
