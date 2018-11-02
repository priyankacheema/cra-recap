import { expect } from "code";
import reposReducer from "./repos";
import types from "../actions/action-list";

describe("Given reposReducer", () => {
  it("should return the default state", () => {
    expect(reposReducer(undefined, {})).to.equal([]);
  });

  it("should return the repos", () => {
    const mockAction = {
      type: types.REPOS_FETCH,
      repos: []
    };
    expect(reposReducer([], mockAction)).to.equal([]);
  });
});
