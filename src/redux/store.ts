import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import langReducer from "./lang/langReducer";
import homeReducer from "@/pages/home/reduce/homeReducer";

const rootReducer = combineReducers({
  langReducer,
  homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RooteState = ReturnType<typeof store.getState>;

export default store;