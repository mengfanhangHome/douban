import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MouseEventHandler,
} from "react";

type TypeMessage = [number, MouseEventHandler];
interface TypeCBs {
  startCB: Function;
  endCB: Function;
}
export default function useMessage(maxInt: number, cbs: TypeCBs): TypeMessage {
  const [count, countHandler] = useState(0);
  const isSetp = useRef(false); // 倒计时标识
  const timer = useRef<NodeJS.Timeout | null>(); // TOD定时器

  useEffect(() => {
    return () => {
      timer.current && clearInterval(timer.current); //  离开时候清楚定时器
    };
  }, []);

  const onSend = useCallback(() => {
    if (isSetp.current) return; //  如果正在倒计时，就中断
    cbs.startCB();
    isSetp.current = true; // 开启倒计时的标识
    countHandler(maxInt); // 写入倒计时值
    timer.current = setInterval(() => {
      // 倒计时
      countHandler((curNum) => {
        if (curNum === 1) {
          isSetp.current = false;
          cbs.endCB();
          timer.current && clearInterval(timer.current);
        }
        return curNum - 1;
      });
    }, 1000);
  }, [maxInt]);

  return [count, onSend];
}
