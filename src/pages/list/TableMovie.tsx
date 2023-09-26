import { FC } from "react";
import { Table } from "antd";
import { HotSelect } from "@/pages/home/components/HotSelect";

export const TableMovie: FC = () => {
  return (
    <>
      <HotSelect />
      <Table></Table>
    </>
  );
};
