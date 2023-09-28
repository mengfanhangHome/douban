import { FC, useState, SyntheticEvent } from "react";
import { Tooltip, Modal, Form, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { IMovieListItem } from "../interface";
import { updateHostRateHandler } from "../reduce/homeAction";
import { SubmitButton } from "./CtrlButton";
import { useLabelColor } from "@/pages/hooks/useChangeColor";
import { useTranslation } from "react-i18next";
import { useSelector } from "@/redux/hooks";
//  评分
export const RateNode: FC<{ item: IMovieListItem }> = (props) => {
  const { rate } = props.item;
  const [editFlag, editFlagHandler] = useState(false);
  const [formRef] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => {
    return {
      isDark: state.globalReducer.isDark,
    };
  });
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
        <h3
          style={{ color: useLabelColor(isDark) }}
          onClick={(e) => editRate(e)}
        >
          {rate
            ? t("hotT50.rateGroup.formLabel") + `:${rate}`
            : t("hotT50.rateGroup.noRate")}
        </h3>
      </Tooltip>
      <Modal
        title={t("hotT50.rateGroup.modalTitle")}
        open={editFlag}
        onCancel={(e) => editCancel(e)}
        footer={footerBox}
      >
        <Form
          form={formRef}
          onClick={(e: SyntheticEvent) => e.stopPropagation()}
        >
          <Form.Item
            label={t("hotT50.rateGroup.formLabel")}
            name="rate"
            rules={[{ required: true }]}
            initialValue={Number(rate)}
          >
            <InputNumber max={10} min={0} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
