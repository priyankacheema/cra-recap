import * as types from "../actions/actions-list";

const defaultState = {};

function fetchGifs(state, actions) {
  console.log(actions.res);
  return actions.res;
}

export default function(state = defaultState, action) {
  const actionsHandler = {
    [types.GIF_FETCH]: fetchGifs
  };

  const reducer = actionsHandler[action.type];
  return reducer ? reducer(state, action) : state;
}
