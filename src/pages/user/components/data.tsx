import { JSXElementConstructor, Key } from "react";
import { Button, Space } from "antd";
import { IUserItem } from "../interface";
export interface DataÎtemType extends IUserItem {
  key: Key;
}

export const genderOptions = [
  {
    value: 0,
    label: "男",
  },
  {
    value: 1,
    label: "女",
  },
];

export const editUsercolumns = (
  editUserHandler: (record: DataÎtemType) => void
) => {
  return [
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
    {
      title: "操作",
      key: "actiom",
      render: (_, record: DataÎtemType) => {
        return (
          <>
            <Space>
              <a onClick={() => editUserHandler(record)}>编辑</a>
            </Space>
          </>
        );
      },
    },
  ];
};
