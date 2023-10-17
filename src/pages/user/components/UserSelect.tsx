import { FC, useEffect } from "react";
import { Form, Input, Col, Row, Button } from "antd";
import { useDispatch } from "react-redux";
import { getUserListCreater } from "../reduce/actions";
import { ISearchData } from "../interface";
import "./user-select.scss";
export const UserSelect: FC = () => {
  const [formRef] = Form.useForm<ISearchData>();
  const dispatch = useDispatch();
  const formData = Form.useWatch([], formRef);

  useEffect(() => {
    searchHandler();
  }, []);

  const searchHandler = () => {
    console.log(typeof formData, "mfh");
    const action = getUserListCreater(formData);
    dispatch(action);
  };

  return (
    <div className="select-layout">
      <Form form={formRef}>
        <Row>
          <Col span={6}>
            <Form.Item name="userId" label="用户名">
              <Input allowClear onPressEnter={searchHandler} />
            </Form.Item>
          </Col>
          <Col span={6} offset={2}>
            <Form.Item>
              <Button onClick={searchHandler}>搜索</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
