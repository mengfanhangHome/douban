import { FC, useState, useEffect } from "react";
import { Modal, Form, Input, FormInstance, Button } from "antd";
import { IAddMovieItem } from "../interface";
import { useDispatch } from "react-redux";
import { addHotCreater } from "../reduce/homeAction";

interface IOpenProps {
  openFlag: boolean;
  toggleModalFlagHandler: Function;
}

const requestRult = [{ required: true }];

interface ISbumitButtonProps {
  formRef: FormInstance;
  submitHandler: Function;
}

//  底部提交按钮
// fromRef: form的ref
const SubmitButton: FC<ISbumitButtonProps> = ({ formRef, submitHandler }) => {
  const [canSubmit, canSubmitHandler] = useState(false);
  const values = Form.useWatch([], formRef); //  获取form的值（动态）

  //  监听values，通过校验是否合法，来改变button的disabled值
  useEffect(() => {
    formRef
      .validateFields({ validateOnly: true })
      .then(() => {
        console.log(1);
        canSubmitHandler(true);
      })
      .catch(() => {
        console.log(2);
        canSubmitHandler(false);
      });
  }, [values]);

  return (
    <Button disabled={!canSubmit} onClick={() => submitHandler(values)}>
      提交
    </Button>
  );
};

export const HotAdd: FC<IOpenProps> = (props) => {
  // TODO: formRef
  const [formRef] = Form.useForm();

  const dispatch = useDispatch();

  //  提交回调
  const submitHandler = (values: IAddMovieItem) => {
    const action = addHotCreater(values);
    dispatch(action);
    props.toggleModalFlagHandler(false);
  };

  // TODO: 底部提交按钮
  const footerBox = [
    <SubmitButton key="1" formRef={formRef} submitHandler={submitHandler} />,
  ];
  return (
    <Modal
      open={props.openFlag}
      onCancel={() => props.toggleModalFlagHandler(false)}
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
