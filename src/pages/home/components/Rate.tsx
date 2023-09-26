import { FC, useState, SyntheticEvent } from "react";
import { Tooltip, Modal, Form, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { IHotItem } from "../reduce/homeReducer";
import { updateHostRateHandler } from "../reduce/homeAction";
import { SubmitButton } from "./CtrlButton";
//  评分
export const RateNode: FC<{ item: IHotItem }> = (props) => {
  const { rate } = props.item;
  const [editFlag, editFlagHandler] = useState(false);
  const [formRef] = Form.useForm();
  const dispatch = useDispatch();
  // TODO: 关闭编辑
  const editCancel = (e?: SyntheticEvent) => {
    e && e.stopPropagation();
    formRef.resetFields();
    editFlagHandler(false);
  };
  //  TODO: 打开编辑
  const editRate = (e: SyntheticEvent) => {
    e.stopPropagation();
    editFlagHandler(true);
  };
  // TOD 确认按钮
  const submitHandler = (values) => {
    const params = {
      ...values,
      id: props.item.id,
    };
    const actionFn = updateHostRateHandler(params);
    dispatch(actionFn);
    editCancel();
    formRef.resetFields();
  };

  const footerBox = [
    <SubmitButton
      key="1"
      formRef={formRef}
      submitHandler={submitHandler}
    ></SubmitButton>,
  ];
  return (
    <>
      <Tooltip title="点击编辑评分">
        <h3 style={{ color: "#000" }} onClick={(e) => editRate(e)}>
          {rate ? `评分：${rate}` : "暂无评分"}
        </h3>
      </Tooltip>
      <Modal
        title="评分编辑"
        open={editFlag}
        onCancel={(e) => editCancel(e)}
        footer={footerBox}
      >
        <Form
          form={formRef}
          onClick={(e: SyntheticEvent) => e.stopPropagation()}
        >
          <Form.Item label="评分" name="rate" rules={[{ required: true }]}>
            <InputNumber max={10} min={0} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
