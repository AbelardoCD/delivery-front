import { combineReducers, createStore } from "redux";
import { AppReducer } from "./appReducer/AppReducer";

const reducers = combineReducers({
  app: AppReducer,
});
export const reduxStore = createStore(reducers);
