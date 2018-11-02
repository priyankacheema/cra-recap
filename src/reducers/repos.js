import types from "../actions/action-list";

function fetchRepos(state, action) {
  return [...action.repos];
}

export default function(state = [], action) {
  const actionHandlers = {
    [types.REPOS_FETCH]: fetchRepos
  };
  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
}
