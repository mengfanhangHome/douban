import { FC } from "react";
import { Card, Col, Image, Empty } from "antd";
import { useSelector } from "@/redux/hooks";
import { IHotItem } from "../reduce/homeReducer";
import "./hot.scss";

export const Hot: FC = () => {
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
    window.open(record.url, "_blank");
  };
  // TOD： 删除操作
  const delMovieHandler = (item: IHotItem) => {
    
  };
  return (
    <div className="t50-outer">
      {(hotList.length &&
        hotList.map((item) => {
          return (
            <Col
              key={item.id}
              span={5}
              className="col-item"
              onClick={() => delMovieHandler(item)}
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
                    onClick={() => toOtherPage(item)}
                  />
                  <Card.Meta
                    title="Europe Street beat"
                    description={item.rate ? `评分：${item.rate}` : "暂无评分"}
                    className="rate"
                  />
                </div>
              </Card>
            </Col>
          );
        })) || <Empty />}
    </div>
  );
};
