import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";
import { getHotCreater } from "../reduce/homeAction";
import { IMovieType } from "@/pages/home/interface";

interface ISelectForm {
  title: string;
  rate: number;
}

export const HotSelect: FC = () => {
  const [selectDate, selectDatahandler] = useState<ISelectForm>({
    title: "",
    rate: 0,
  });

  //  TODO:获取type
  const { type } = useParams<IMovieType>();
  // TODO: dispatch
  const dispatch = useDispatch();

  const formItemLayout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 4,
    },
  };
  //  初始化list
  useEffect(() => {
    getHot();
  }, []);

  //  更新select
  const setFormData = (e, key: string) => {
    const updataItem = {
      [key]: e?.target?.value || e || 0,
    };
    selectDatahandler((state) => {
      return {
        ...state,
        ...updataItem,
      };
    });
  };
  //  获取电影列表函数
  const getHot = async () => {
    const action = getHotCreater(type, selectDate);
    dispatch(action);
  };
  return (
    <>
      <Form>
        <Form.Item label="电影名称" {...formItemLayout}>
          <Input onChange={(e) => setFormData(e, "title")} />
        </Form.Item>
        <Form.Item label="电影评分" {...formItemLayout}>
          <InputNumber onChange={(e) => setFormData(e, "rate")} />
        </Form.Item>
        <Form.Item>
          <Button onClick={getHot}>查找</Button>
        </Form.Item>
      </Form>
    </>
  );
};
