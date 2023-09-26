import { FC, SyntheticEvent, useEffect, useState } from "react";

import { FormInstance, Form, Button } from "antd";

interface ISbumitButtonProps {
  formRef: FormInstance;
  submitHandler: Function;
}
//  底部提交按钮
// fromRef: form的ref
// submitHandler 提交回掉<参数>
export const SubmitButton: FC<ISbumitButtonProps> = ({
  formRef,
  submitHandler,
}) => {
  //  控制button disabled的flag
  const [canSubmit, canSubmitHandler] = useState(false);
  //  获取form的值（动态）
  const values = Form.useWatch([], formRef);

  const sendSubmit = (e: SyntheticEvent) => {
    e.stopPropagation();
    submitHandler(values);
  };

  //  监听values，通过校验是否合法，来改变button的disabled值
  useEffect(() => {
    formRef
      .validateFields({ validateOnly: true })
      .then(() => {
        canSubmitHandler(true);
      })
      .catch(() => {
        canSubmitHandler(false);
      });
  }, [values]);

  return (
    <Button disabled={!canSubmit} onClick={(e) => sendSubmit(e)}>
      提交
    </Button>
  );
};
