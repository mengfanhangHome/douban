//  夜间模式监听器(仅适用于macOS)
//  @return isDark: boolean
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleDarkHandler } from "@/redux/global/globalActions";

const darkModeQuery =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

export const useDark = () => {
  // const [isDark, isDarkHandler] = useState(darkModeQuery.matches);
  const dispatch = useDispatch();
  useEffect(() => {
    darkModeQuery.addListener(watchFn);
    return () => {
      console.log("unMounte");
      darkModeQuery.removeListener(watchFn);
    };
  }, []);

  const watchFn = (e: MediaQueryListEvent) => {
    const action = toggleDarkHandler(e.matches);
    dispatch(action);
  };
};
