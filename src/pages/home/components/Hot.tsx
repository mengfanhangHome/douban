import { FC, SyntheticEvent, useState, memo } from "react";
import { Card, Col, Image, Empty, Modal, Tooltip } from "antd";
import { useSelector } from "@/redux/hooks";
import { IMovieListItem } from "../interface";
import { deleteHotCreater } from "../reduce/homeAction";
import { useDispatch } from "react-redux";
import { RateNode } from "./Rate";
import { useTranslation } from "react-i18next";
import "./hot.scss";
//  样式
const styleContentPublic = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

const MovieTitle: FC<{ item: IMovieListItem }> = ({ item }) => {
  return <h3>{item.title}</h3>;
};

export const Hot: FC = () => {
  // 获取hotList数据，从redux中
  const { hotList } = useSelector((state) => {
    return {
      hotList: state.homeReducer.hotList,
    };
  });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [delFlag, delFlagHandler] = useState(false);
  const [curItem, curItemHandler] = useState<IMovieListItem>();
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
  const delSingHandler = (item: IMovieListItem) => {
    delFlagHandler(true);
    curItemHandler(item);
  };
  // 关闭弹窗，并赋值ids
  const delCancel = () => {
    delFlagHandler(false);
  };
  // TOD：跳转详情页
  const toOtherPage = (record: IMovieListItem, e: SyntheticEvent) => {
    e.stopPropagation();
    window.open(record.url, "_blank");
  };
  return (
    <>
      <div className="t50-outer">
        {(hotList.length &&
          hotList.map((item) => {
            return (
              <Col key={item.id} span={5} className="col-item">
                <Card
                  className="card-item"
                  title={<MovieTitle item={item}></MovieTitle>}
                  bodyStyle={styleContentPublic}
                  hoverable={true}
                  key={item.id}
                  onClick={() => delSingHandler(item)}
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
        title={t("hotT50.deleteModal.title")}
        open={delFlag}
        onOk={delMovieHandler}
        onCancel={delCancel}
      >
        {(t("hotT50.deleteModal.contentText") + (curItem && curItem.title) ||
          "") + "?"}
      </Modal>
    </>
  );
};
