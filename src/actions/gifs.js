import { fetchGifs } from "../services/giphy";
import types from "./action-list";

//regular action creators return objects
//async action creators return functions
export const fetchFromGiphy = searchTerm => {
  return async dispatch => {
    const gifsObjs = await fetchGifs(searchTerm);
    return dispatch({ type: types.GIFS_FETCH, gifs: gifsObjs.data });
  };
};

//ANOTHER METHOD WITH PROMISES
// import { fetchGifs } from "../services/giphy";
// import types from "./action-list";

// //regular action creators return objects
// //async action creators return functions
// export const fetchFromGiphy = searchTerm => {
//   return dispatch => {
//     return fetchGifs(searchTerm).then(gifsObjs => {
//       return dispatch({ type: types.GIFS_FETCH, gifs: gifsObjs.data });
//     });
//   };
// };
