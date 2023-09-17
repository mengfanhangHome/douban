import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IPath } from "./interface";
import { useDispatch } from "react-redux";
import { getDetail } from "./reduce/detailAction";
import { IDetailParams } from "./interface";

export const DetailPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getDetail<IDetailParams>({
      url: "http://localhost:1000/api/movie/detail",
      query: {
        path: "123",
      },
    });
    dispatch(action);
  }, []);
  return <h1>detail</h1>;
};
