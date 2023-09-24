import { FC, useEffect, useState, useRef, createRef } from "react";
import { Button } from "antd";
import { TestChild } from "./TestChild";
import { TestChildClass } from "./TestChild.class";
import { RenderTest } from "./RenderTest";

interface IChildPort {
  abcAvater: Function;
}

const App: FC = () => {
  const [count, countHandler] = useState(0);

  const childRef = createRef<IChildPort>();
  const childClassRef = useRef();

  const clickCHildHandler = () => {
    childRef.current && childRef.current.abcAvater();
  };
  let x = 123;
  const someHandler = () => {
    x = 345;
  };

  useEffect(() => {
    return () => {
      console.log(`next is ${count + 1}`);
    };
  }, [count]);

  return (
    <>
      {/* <TestChild ref={child} /> */}
      <TestChild ref={childRef} />
      <h1>this is {count}</h1>
      <Button onClick={() => countHandler(count)}>点击我</Button>
      <Button onClick={clickCHildHandler}>click Child</Button>
      <Button onClick={someHandler}>do somethine</Button>
      <TestChildClass ref={childClassRef} name={"classChild"} />
      <RenderTest x={x} />
    </>
  );
};

export default App;
