import {
  useLabelColor,
  useDisableColor,
  useBackgroundColor,
} from "@/pages/hooks/useChangeColor";
import { ConfigProvider } from "antd";
import { useDark } from "@/pages/hooks/useDark";
import { useSelector } from "@/redux/hooks";

/* 
  dsc:
  此高阶函数用于设置antd组件样式，旨在控制夜间模式和白天模式
  sunset: number 日落时间，默认为17点切换为夜间模式
 */
const useWithFrom = (Com) => {
  return (props) => {
    // 注册夜晚模式监听
    useDark();
    // TOD 获取夜晚模式结果
    const { isDark } = useSelector((state) => {
      return {
        isDark: state.globalReducer.isDark,
      };
    });
    return (
      <ConfigProvider
        theme={{
          /*  */
          components: {
            Table: {
              borderColor: useLabelColor(isDark),
            },
            Card: {
              headerBg: "#855c5c",
              extraColor: useLabelColor(isDark),
            },
            Modal: {
              titleColor: useLabelColor(isDark),
            },
            Form: {
              labelColor: useLabelColor(isDark),
            },
          },
          token: {
            colorBgContainer: useBackgroundColor(isDark),
            colorBgElevated: useBackgroundColor(isDark),
            colorText: useLabelColor(isDark),
            colorTextDisabled: useDisableColor(isDark),
          },
        }}
      >
        <Com {...props} />
      </ConfigProvider>
    );
  };
};
export default useWithFrom;
