import {
  useLabelColor,
  useDisableColor,
  useBackgroundColor,
} from "@/pages/hooks/useChangeColor";
import { ConfigProvider } from "antd";

/* 
  dsc:
  此高阶函数用于设置antd组件样式，旨在控制夜间模式和白天模式
  sunset: number 日落时间，默认为17点切换为夜间模式
 */
const withFrom = (Com, sunset = 17) => {
  return (props) => (
    <ConfigProvider
      theme={{
        /*  */
        components: {
          Card: {
            headerBg: "#855c5c",
            actionsBg: ''
          },
          Modal: {
            titleColor: useLabelColor(sunset),
          },
        },
        token: {
          colorBgContainer: useBackgroundColor(sunset),
          colorBgElevated: useBackgroundColor(sunset),
          colorText: useLabelColor(sunset),
          colorTextDisabled: useDisableColor(sunset),
        },
      }}
    >
      <Com {...props} />
    </ConfigProvider>
  );
};
export default withFrom;
