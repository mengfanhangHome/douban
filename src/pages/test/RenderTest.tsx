import { FC } from "react";

export const RenderTest: FC = (props) => {
  console.log("render");
  return <h1>我是TestRender{props.x}</h1>;
};
