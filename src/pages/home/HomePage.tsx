import { FC, SyntheticEvent, useState } from "react";
import { Modal } from "antd";
import { Hot } from "./components/Hot";
import { HotSelect } from "./components/HotSelect";
import { useTranslation } from "react-i18next";

export const HomePage: FC = () => {
  const [tipFlag, tipFlagHandler] = useState(true);
  const { t } = useTranslation();
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
          <p>{t("hotT50.headerTips.delete")}</p>
          <p>{t("hotT50.headerTips.rate")}</p>
          <p>{t("hotT50.headerTips.detail")}</p>
        </div>
      </Modal>
    </>
  );
};
