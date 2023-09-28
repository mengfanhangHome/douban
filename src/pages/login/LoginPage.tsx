import { FC } from "react";
import { Button, Form, Input, Card } from "antd";
import { dbPng } from "@/common/url";
import { useTranslation } from "react-i18next";
import { Message } from "./component/Message";

const { Item } = Form;

//  from-item类型
type FieldType = {
  username?: string;
  password?: string;
};

export const LoginPage: FC = () => {
  const { t } = useTranslation(); //  i18n国际化hooks
  return (
    <Card>
      <img src={dbPng} alt="我是孟帆航" />
      <Form name="userFrom" labelCol={{ span: 8 }} style={{ maxWidth: 600 }}>
        <Item<FieldType> label={t("login.user")} name="username">
          <Input />
        </Item>
        <Item<FieldType> label={t("login.pwd")} name="password">
          <Input /> 
        </Item>
        <Item<FieldType> label={t("login.phonePwd")} name="password">
          <Message />
        </Item>
        <Item label={t("login.handler")}>
          <Button>{t("login.loginButton")}</Button>
          <Button>{t("login.register")}</Button>
        </Item>
      </Form>
    </Card>
  );
};
