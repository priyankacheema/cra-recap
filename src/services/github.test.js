import sinon from "sinon";
import { expect } from "code";
import { fetchRepos } from "./github";
import Chance from "chance";

describe("Given a fetchRepos service", () => {
  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should call fetch with the correct endpoint", () => {
    const chance = new Chance();
    const searchTerm = chance.string();
    fetchStub.resolves({ json: sinon.spy() });

    fetchRepos(searchTerm).then(() => {
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(
        fetchStub,
        `${process.env.REACT_APP_GITHUB_URL}${searchTerm}/repos?access_token=${
          process.env.REACT_APP_GITHUB_API_KEY
        }&q=${searchTerm}`
      );
    });
  });
});
