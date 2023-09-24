import { FC } from "react";
import { Hot } from "./components/Hot";
import { HotSelect } from "./components/HotSelect";

export const HomePage: FC = () => {
  return (
    <>
      {/* 搜索 */}
      <HotSelect />
      {/* 列表 */}
      <Hot />
    </>
  );
};
