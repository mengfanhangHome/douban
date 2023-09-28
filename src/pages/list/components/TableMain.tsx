import { FC, useEffect, useState } from "react";
import { Table } from "antd";
import { useSelector } from "@/redux/hooks";
import { IMovieListItem } from "@/pages/home/interface";

export const TableMain: FC = () => {
  const { hotList } = useSelector((state) => {
    return {
      hotList: state.homeReducer.hotList,
    };
  });

  const [dataSource, dataSourceHandler] = useState<IMovieListItem[]>([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "电影名",
      dataIndex: "title",
      key: "id",
    },
    {
      title: "评分",
      dataIndex: "rate",
      key: "id",
    },
    {
      title: "电影海报地址",
      dataIndex: "cover",
      key: "id",
    },
    {
      title: "电影详情地址",
      dataIndex: "url",
      key: "id",
    },
  ];

  useEffect(() => {
    dataSourceHandler(hotList);
    console.log(hotList, "fff");
  }, [hotList]);

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};
