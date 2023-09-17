import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RooteState } from "@/redux/store";
//  我们这里是将RootState 合并到 useSelector这个react-redux的hooks钩子中去，用来丰富我们自定义的state类型
export const useSelector: TypedUseSelectorHook<RooteState> = useReduxSelector;
