import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, InputNumber } from "antd";
import { getHotCreater } from "../reduce/homeAction";
import { IMovieType } from "@/pages/home/interface";
import { HotAdd } from "./HotAdd";
import "./hotSelect.scss";

interface ISelectForm {
  title: string;
  rate: number;
}
//  select组件
export const HotSelect: FC = () => {
  const [selectDate, selectDatahandler] = useState<ISelectForm>({
    title: "",
    rate: 0,
  });
  const [modalFlag, modalFlagHandler] = useState(false);

  const { t } = useTranslation();

  //  开/关弹窗事件
  const toggleModalFlagHandler = (bool: boolean) => {
    modalFlagHandler(bool);
  };
  //  TODO:获取type
  const { type } = useParams<IMovieType>();
  // TODO: dispatch
  const dispatch = useDispatch();

  const formItemLayout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 12,
    },
  };
  //  初始化list
  useEffect(() => {
    getHot();
  }, []);

  //  更新select
  const setFormData = (e, key: string) => {
    let value = "";
    if (e?.target?.value !== undefined) {
      value = e.target.value;
    } else {
      value = e || 0;
    }
    const updataItem = {
      [key]: value,
    };
    console.log(updataItem);
    selectDatahandler((state) => {
      return {
        ...state,
        ...updataItem,
      };
    });
  };
  //  获取电影列表函数
  const getHot = async () => {
    const action = getHotCreater(selectDate);
    dispatch(action);
  };
  //  新增电影列表函数
  const addHot = async () => {
    toggleModalFlagHandler(true);
  };
  return (
    <>
      <Form className="form-layout" layout="inline">
        <Form.Item label={t("hotT50.searchFrom.name")} {...formItemLayout}>
          <Input
            onChange={(e) => setFormData(e, "title")}
            onPressEnter={getHot}
          />
        </Form.Item>
        <Form.Item label={t("hotT50.searchFrom.rate")} {...formItemLayout}>
          <InputNumber
            onChange={(e) => setFormData(e, "rate")}
            onPressEnter={getHot}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={getHot}>
            {t("hotT50.searchFrom.searchButton")}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={addHot}>{t("hotT50.searchFrom.addButton")}</Button>
        </Form.Item>
      </Form>
      <HotAdd
        openFlag={modalFlag}
        toggleModalFlagHandler={toggleModalFlagHandler}
      />
    </>
  );
};
