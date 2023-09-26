import { FC, SyntheticEvent, useState } from "react";
import { Modal } from "antd";
import { Hot } from "./components/Hot";
import { HotSelect } from "./components/HotSelect";

export const HomePage: FC = () => {
  const [tipFlag, tipFlagHandler] = useState(true);
  return (
    <>
      {/* 搜索 */}
      <HotSelect />
      {/* 列表 */}
      <Hot />
      <Modal
        title="温馨提示❤️"
        open={tipFlag}
        onCancel={() => tipFlagHandler(false)}
        footer={null}
      >
        <div onClick={(e: SyntheticEvent) => e.stopPropagation()}>
          <p>1: 点击他妈电影名字可以删除</p>
          <p>2: 点击电影评分可以编辑评分</p>
          <p>3: 点击图片可以跳转到详情页</p>
        </div>
      </Modal>
    </>
  );
};
