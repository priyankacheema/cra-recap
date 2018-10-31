import * as types from "./actions-list";
import { fetchGifsList } from "../service/gifs";

export function fetchGifs(searchText) {
  return async dispatch => {
    let res = await fetchGifsList(searchText);

    res.data.map(url => {
      //console.log(url);
      return dispatch({ type: types.GIF_FETCH, res: url });
    });
  };
}
