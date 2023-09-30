import { FC } from "react";
import { Button, Form, Input, Card } from "antd";
import { dbPng } from "@/common/url";
import { useTranslation } from "react-i18next";
import { Message } from "./component/Message";
import {
  loginHandlerCreater,
  registerActionCreater,
} from "@/redux/login/loginActions";
import { ILoginData } from "@/redux/login/interface";
import { useDispatch } from "react-redux";

const { Item } = Form;

//  from-item类型
type FieldType = {
  username?: string;
  password?: string;
};

export const LoginPage: FC = () => {
  const { t } = useTranslation(); //  i18n国际化hooks
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();
  const loginData = Form.useWatch<ILoginData>([], formRef);
  //  登录
  const loginHandler = () => {
    const action = loginHandlerCreater(loginData);
    dispatch(action);
  };
  // TOD 注册
  const registerHandler = () => {
    const action = registerActionCreater(loginData);
    dispatch(action);
  };

  return (
    <Card>
      <img src={dbPng} alt="我是孟帆航" />
      <Form
        form={formRef}
        name="userFrom"
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600 }}
      >
        <Item<FieldType> label={t("login.user")} name="username">
          <Input />
        </Item>
        <Item<FieldType> label={t("login.pwd")} name="password">
          <Input.Password />
        </Item>
        <Item<FieldType> label={t("login.phonePwd")} name="password">
          <Message />
        </Item>
        <Item label={t("login.handler")}>
          <Button onClick={loginHandler}>{t("login.loginButton")}</Button>
          <Button onClick={registerHandler}>{t("login.registerButton")}</Button>
        </Item>
      </Form>
    </Card>
  );
};
