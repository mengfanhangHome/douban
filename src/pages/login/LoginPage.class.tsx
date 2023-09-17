import React from "react";
import { Button, Form, Input, Dropdown, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { dbPng } from "@/common/url";
import { ILang, changeLanguageCreator } from "@/redux/lang";
import { withTranslation, WithTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RooteState } from "@/redux/store";

const { Item } = Form;
// 组件state类型
const mapStateToProps = (state: RooteState) => {
  return {
    lang: state.lang,
    langList: state.langList,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleLangHandler: (code: "zh" | "en") => {
      const action = changeLanguageCreator(code);
      console.log(action);
      dispatch(action);
    },
  };
};
//  from-item类型
type FieldType = {
  username?: string;
  password?: string;
};

class LoginComponent extends React.Component<
  WithTranslation & ReturnType<typeof mapStateToProps>
> {
  //  下拉子菜单
  menuChildren = () => {
    return this.props.langList.map((item) => {
      return {
        label: item.label,
        key: item.code,
        disabled: this.props.lang === item.code,
      };
    });
  };

  render(): React.ReactNode {
    const { t } = this.props;
    return (
      <>
        <Dropdown.Button
          icon={<GlobalOutlined />}
          dropdownRender={() => {
            return (
              <Menu
                onClick={(e) => this.props.toggleLangHandler(e.key)}
                items={this.menuChildren()}
              ></Menu>
            );
          }}
        >
          {(this.props.lang === "en" && "to Chinese") || "变成英文"}
        </Dropdown.Button>
        <img src={dbPng} alt="我是孟帆航" />
        <Form name="userFrom" labelCol={{ span: 8 }} style={{ maxWidth: 600 }}>
          <Item<FieldType> label={t("login.user")} name="username">
            <Input />
          </Item>
          <Item<FieldType> label={t("login.pwd")} name="password">
            <Input />
          </Item>
          <Item>
            <Button>登陆</Button>
          </Item>
        </Form>
      </>
    );
  }
}
export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(LoginComponent));
