import sinon from "sinon";
import { expect } from "code";
import { fetchGifs } from "./giphy";
import Chance from "chance";

describe("Given a fetchGifs service", () => {
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
    //.resolves gives .then ability
    fetchStub.resolves({ json: sinon.spy() });

    fetchGifs(searchTerm).then(() => {
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(
        fetchStub,
        `${process.env.REACT_APP_GIPHY_URL}?api_key=${
          process.env.REACT_APP_GIPHY_API_KEY
        }&q=${searchTerm}`
      );
    });
  });

  //   it("should call fetch with the correct endpoint", () => {
  //     fetchStub.resolves({ json: sinon.spy() });
  //     fetchGifs().then(() => {
  //       sinon.assert.calledWithExactly(
  //         fetchStub,
  //         "https://opentdb.com/api.php?amount=10"
  //       );
  //     });
  //   });
});
