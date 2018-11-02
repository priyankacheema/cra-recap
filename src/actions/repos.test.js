import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import sinon from "sinon";
import * as repoActions from "./repos";
import types from "./action-list";
import { expect } from "code";
import * as repoService from "../services/github";

describe("Given repo actions", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  let fetchRepoStub;

  beforeEach(() => {
    fetchRepoStub = sinon.stub(repoService, "fetchRepos");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should dispatch the action", () => {
    const store = mockStore([]);
    const mockValue = [];
    fetchRepoStub.resolves(mockValue);
    return store.dispatch(repoActions.fetchFromRepos()).then(() => {
      const action = store.getActions()[0];
      expect(action).to.equal({ type: types.REPOS_FETCH, repos: mockValue });
    });
  });
});
