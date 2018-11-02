import { combineReducers } from "redux";
import gifReducers from "./gifs";
import reposReducers from "./repos";

export default combineReducers({
  gifs: gifReducers,
  repos: reposReducers
});
