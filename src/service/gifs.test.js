import { expect } from "code";
import sinon from "sinon";
import { fetchGifsList } from "./gifs";

describe("Given the Giphy service", () => {
  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });
  describe("When fetchGifsList() is called", () => {
    describe("Then the call is successful", () => {
      let mockvalue;
      beforeEach(() => {
        mockvalue = [{}];
        const json = sinon.stub().returns(mockvalue);
        fetchStub.resolves({ json });
      });

      it("should return the mock values", () => {
        fetchGifsList().then(gifs => {
          expect(gifs).to.equal(mockValue);
        });
      });
    });
  });
});
