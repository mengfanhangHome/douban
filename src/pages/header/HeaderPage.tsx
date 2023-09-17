import { FC } from "react";
import { Dropdown, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { changeLanguageCreator } from "@/redux/lang";
import { useSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";

export const HeaderPage: FC = () => {
  const dispatch = useDispatch(); //  dispatch分发器
  //  redux hooks用法，使用useSelector(redux提供的hooks方法)，来获取state中的state值
  const { lang, langList } = useSelector((store) => ({
    lang: store.langReducer.lang,
    langList: store.langReducer.langList,
  }));
  // 切换lang
  const toggleLangHandler = (code: "zh" | "en") => {
    const action = changeLanguageCreator(code);
    dispatch(action);
  };
  //  下拉子菜单
  const menuChildren = () => {
    return langList.map((item) => {
      return {
        label: item.label,
        key: item.code,
        disabled: lang === item.code,
      };
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#888",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
      }}
    >
      <Dropdown.Button
        icon={<GlobalOutlined />}
        dropdownRender={() => {
          return (
            <Menu
              onClick={(e) => toggleLangHandler(e.key as "en" | "zh")}
              items={menuChildren()}
            ></Menu>
          );
        }}
      >
        {(lang === "en" && "to Chinese") || "变成英文"}
      </Dropdown.Button>
    </div>
  );
};
