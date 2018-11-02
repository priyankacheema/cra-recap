import { fetchRepos } from "../services/github";
import types from "./action-list";

export const fetchFromRepos = searchTerm => {
  return async dispatch => {
    const reposObjs = await fetchRepos(searchTerm);
    return dispatch({ type: types.REPOS_FETCH, repos: reposObjs });
  };
};
