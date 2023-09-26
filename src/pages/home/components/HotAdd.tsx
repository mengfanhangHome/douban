import { FC, useState, useEffect, SyntheticEvent } from "react";
import { Modal, Form, Input, FormInstance, Button } from "antd";
import { IAddMovieItem } from "../interface";
import { useDispatch } from "react-redux";
import { addHotCreater } from "../reduce/homeAction";
import { SubmitButton } from "./CtrlButton";

interface IOpenProps {
  openFlag: boolean;
  toggleModalFlagHandler: Function;
}

const requestRult = [{ required: true }];

export const HotAdd: FC<IOpenProps> = (props) => {
  // TODO: formRef
  const [formRef] = Form.useForm();

  const dispatch = useDispatch();
  //  取消
  const cancalAddHandler = (e?: SyntheticEvent) => {
    e && e.stopPropagation();
    formRef.resetFields;
    props.toggleModalFlagHandler(false);
  };
  //  提交回调
  const submitHandler = (values: IAddMovieItem) => {
    const action = addHotCreater(values);
    dispatch(action);
    cancalAddHandler();
  };

  // TODO: 底部提交按钮
  const footerBox = [
    <SubmitButton key="1" formRef={formRef} submitHandler={submitHandler} />,
  ];
  return (
    <Modal
      open={props.openFlag}
      onCancel={(e) => cancalAddHandler(e)}
      footer={footerBox}
    >
      <h1>新增电影</h1>
      <Form form={formRef}>
        <Form.Item label="电影名称" name="title" rules={requestRult}>
          <Input />
        </Form.Item>
        <Form.Item label="豆瓣路径" name="url" rules={requestRult}>
          <Input />
        </Form.Item>
        <Form.Item label="电影海报" name="cover" rules={requestRult}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
