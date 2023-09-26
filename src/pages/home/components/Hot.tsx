import { FC, SyntheticEvent, useState } from "react";
import { Card, Col, Image, Empty, Modal, Tooltip } from "antd";
import { useSelector } from "@/redux/hooks";
import { IHotItem } from "../reduce/homeReducer";
import { deleteHotCreater } from "../reduce/homeAction";
import { useDispatch } from "react-redux";
import { RateNode } from "./Rate";
import "./hot.scss";
//  样式
const styleContentPublic = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

export const Hot: FC = () => {
  // 获取hotList数据，从redux中
  const { hotList } = useSelector((state) => {
    return {
      hotList: state.homeReducer.hotList,
    };
  });
  const dispatch = useDispatch();
  const [delFlag, delFlagHandler] = useState(false);
  const [curItem, curItemHandler] = useState<IHotItem>();
  // TOD： 删除操作
  const delMovieHandler = () => {
    if (curItem) {
      const action = deleteHotCreater([curItem.id]);
      dispatch(action);
      //  要在这里执行关闭弹窗/不关闭弹窗操作，但是执行结果在reduce里，咋整呢
      delFlagHandler(false);
    }
  };
  //  打开弹窗，并赋值ids
  const delSingHandler = (item: IHotItem) => {
    delFlagHandler(true);
    curItemHandler(item);
  };
  // 关闭弹窗，并赋值ids
  const delCancel = () => {
    delFlagHandler(false);
  };
  // TOD：跳转详情页
  const toOtherPage = (record: IHotItem, e: SyntheticEvent) => {
    e.stopPropagation();
    window.open(record.url, "_blank");
  };
  return (
    <>
      <div className="t50-outer">
        {(hotList.length &&
          hotList.map((item) => {
            return (
              <Col
                key={item.id}
                span={5}
                className="col-item"
                onClick={() => delSingHandler(item)}
              >
                <Card
                  className="card-item"
                  title={item.title}
                  bodyStyle={styleContentPublic}
                  hoverable={true}
                  key={item.id}
                >
                  <div>
                    <Tooltip title="点击跳转详情">
                      <Image
                        preview={false}
                        className="pic"
                        src={item.cover}
                        alt=""
                        onClick={(e) => toOtherPage(item, e)}
                      />
                    </Tooltip>
                    <Card.Meta
                      title="Europe Street beat"
                      description={<RateNode item={item} />}
                      className="rate"
                    />
                  </div>
                </Card>
              </Col>
            );
          })) || <Empty />}
      </div>
      {/* 删除弹窗 */}
      <Modal
        title="删除操作"
        open={delFlag}
        onOk={delMovieHandler}
        onCancel={delCancel}
      >
        {`确认删除${(curItem && curItem.title) || ""}吗？`}
      </Modal>
    </>
  );
};
