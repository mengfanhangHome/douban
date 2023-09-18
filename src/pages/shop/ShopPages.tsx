import { FC, useEffect, useState } from "react";
import { goodListCreater } from "./reduce/shopAction";
import { useDispatch } from "react-redux";
import { useSelector } from "@/redux/hooks";
import { GoodList } from "./GoodList";

export const ShopPage: FC = () => {
  return (
    <>
      <GoodList />
    </>
  );
};
