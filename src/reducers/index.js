import { combineReducers } from "redux";
import gifsReducer from "./gifs";

export default combineReducers({
  gifs: gifsReducer
});
