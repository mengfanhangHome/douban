import { FC, useState } from "react";
import { useSelector } from "@/redux/hooks";
import { Card, Table, Modal, Form, Input, Select, InputNumber } from "antd";
import { IUserItem } from "../interface";
import { Map } from "immutable";
import { editUsercolumns, DataÎtemType, genderOptions } from "./data";

export const UserTable: FC = () => {
  const [open, setOpen] = useState(false);
  const [curUser, setCurUser] = useState<IUserItem>();
  const { userList } = useSelector((state) => {
    const user = (state.userReducer as Map<string, any>).toJS();
    const effectData = user.userList.map((item: IUserItem) => {
      return {
        ...item,
        key: item.userId,
      };
    });
    return {
      userList: effectData,
    };
  });

  const editUserHandler = (record: DataÎtemType) => {
    setCurUser(record);
    setOpen(true);
  };
  //  关闭弹窗
  const closeModal = () => {
    setOpen(false);
  };
  const confirmModal = () => {
    closeModal();
  };

  return (
    <>
      <Card>
        <Table
          bordered
          columns={editUsercolumns(editUserHandler)}
          dataSource={userList}
        ></Table>
      </Card>
      <Modal
        open={open}
        onOk={confirmModal}
        onCancel={closeModal}
        title="编辑用户"
      >
        <Form initialValues={curUser} labelCol={{ span: 3 }}>
          <Form.Item label="用户名" name="userId">
            <Input disabled />
          </Form.Item>
          <Form.Item label="年龄" name="age">
            <InputNumber min={0} max={100} />
          </Form.Item>
          <Form.Item label="用户信息" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="性别" name="gener">
            <Select options={genderOptions} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
