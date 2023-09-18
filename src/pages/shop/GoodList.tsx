import { FC, useEffect, useState } from "react";
import { List, Button } from "antd";
import { goodListCreater } from "./reduce/shopAction";
import { useDispatch } from "react-redux";
import { useSelector } from "@/redux/hooks";
import { IGoodItem } from "./interface";
import "./good_list.scss";

export const GoodList: FC = () => {
  const dispatch = useDispatch();
  const { goodList } = useSelector((state) => ({
    goodList: state.shopReducer.goodList,
  }));

  useEffect(() => {
    const action = goodListCreater("http://localhost:1000/api/goods/list");
    dispatch(action);
  }, []);

  return (
    <>
      {goodList && (
        <List
          itemLayout="horizontal"
          dataSource={goodList}
          renderItem={(item) => {
            return (
              <List.Item>
                <div className="box">
                  <div className="detail">
                    <div className="name">商品名: {item.name}</div>
                    <div className="unit">数量：{item.unit}</div>
                    <div>
                      <span className="price">价格：{item.price}</span>
                    </div>
                  </div>
                  <div className="operate">
                    <Button>添加购物车</Button>
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
      )}
    </>
  );
};
