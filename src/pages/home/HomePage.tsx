import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHotCreater } from "./reduce/homeAction";
import { Hot } from "./components/Hot";
import { IMovieType } from "@/pages/home/interface";

export const HomePage: FC = () => {
  const { type } = useParams<IMovieType>();
  // TODO: dispatch
  const dispatch = useDispatch();

  //  获取电影列表
  const getHot = async () => {
    const action = getHotCreater(type);
    dispatch(action);
  };
  useEffect(() => {
    getHot();
  }, []);

  return <Hot />;
};
