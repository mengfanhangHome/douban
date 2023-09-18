import { FC, useCallback } from "react";
import { Button } from "antd";
import useMessage from "./useMessage";

export const Message: FC = () => {
  const startCB = () => {
    console.log("start");
  };
  const endCB = () => {
    console.log("end");
  };
  const [count, onSend] = useMessage(10, { startCB, endCB });
  const buttonMsg = count ? `还剩${count}秒` : "点击发送短信";
  return (
    <>
      <Button onClick={onSend}>{buttonMsg}</Button>
    </>
  );
};
