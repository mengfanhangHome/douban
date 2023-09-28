import { FC } from "react";
import { TableMain } from "./components/TableMain";
import { HotSelect } from "@/pages/home/components/HotSelect";

export const TableMovie: FC = () => {
  return (
    <>
      <HotSelect />
      <TableMain />
    </>
  );
};
