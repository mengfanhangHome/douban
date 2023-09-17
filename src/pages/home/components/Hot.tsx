import { FC } from "react";
import { Card, Col, Image } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { IHotItem } from "../reduce/homeReducer";
import { updataDetailUrlCreater } from "../reduce/homeAction";
import "./hot.scss";

export const Hot: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // 获取hotList数据，从redux中
  const { hotList } = useSelector((state) => {
    return {
      hotList: state.homeReducer.hotList,
    };
  });
  //  样式
  const styleContentPublic = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  };
  // TOD：跳转详情页
  const toOtherPage = (record: IHotItem) => {
    const action = updataDetailUrlCreater(record.url); // TOD将跳转详情页的html爬虫目标地址写入redux
    dispatch(action);
    history.push(`/detail`);
  };
  return (
    <div className="t50-outer">
      {hotList.map((item) => {
        return (
          <Col
            key={item.id}
            span={5}
            className="col-item"
            onClick={() => toOtherPage(item)}
          >
            <Card
              className="card-item"
              title={item.title}
              bodyStyle={styleContentPublic}
              hoverable={true}
              key={item.id}
            >
              <div>
                <Image
                  preview={false}
                  className="pic"
                  src={item.cover}
                  alt=""
                />
                <Card.Meta
                  title="Europe Street beat"
                  description={`评分：${item.rate}`}
                  className="rate"
                />
              </div>
            </Card>
          </Col>
        );
      })}
    </div>
  );
};
