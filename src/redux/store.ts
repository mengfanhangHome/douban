import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import langReducer from "./lang/langReducer";
import homeReducer from "@/pages/home/reduce/homeReducer";
import shopReducer from "@/pages/shop/reduce/shopReducer";
import globalReducer from "./global/globalReduces";
import userReducer from "@/pages/user/reduce/reduces";

const rootReducer = combineReducers({
  langReducer,
  homeReducer,
  shopReducer,
  globalReducer,
  userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RooteState = ReturnType<typeof store.getState>;

export default store;
