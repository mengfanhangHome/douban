import { FC, useState, forwardRef, useImperativeHandle } from "react";
import { Button } from "antd";

export const TestChild: FC = forwardRef((props, ref) => {
  const [count, countHandler] = useState(0);
  const abc = () => {
    console.log(123);
  };
  useImperativeHandle(ref, () => {
    return {
      abcAvater: abc,
    };
  });
  return (
    <div ref={ref}>
      <span>{count}</span>
      <br />
      <Button onClick={() => countHandler(count + 1)}>children</Button>;
    </div>
  );
});
