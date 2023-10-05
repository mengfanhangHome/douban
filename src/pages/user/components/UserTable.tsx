import { FC, useEffect, useState } from "react";
import { useSelector } from "@/redux/hooks";
import { Card, Table } from "antd";
import { IUserItem } from "../interface";
import { Map } from "immutable";

export const UserTable: FC = () => {
  const { userList } = useSelector((state) => {
    const user = (state.userReducer as Map<string, any>).toJS();
    return {
      userList: user.userList,
    };
  });
  const columns = [
    {
      title: "用户名",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "用户信息",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
    },
  ];
  return (
    <Card>
      <Table columns={columns} dataSource={userList}>
        123
      </Table>
    </Card>
  );
};
