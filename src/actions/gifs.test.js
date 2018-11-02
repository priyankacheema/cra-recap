import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import sinon from "sinon";
import * as gifActions from "./gifs";
import types from "./action-list";
import { expect } from "code";
import * as gifService from "../services/giphy";

//thunk is to delay the process eg: result of an async call
describe("Given gif actions", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  let fetchGifStub;

  beforeEach(() => {
    fetchGifStub = sinon.stub(gifService, "fetchGifs");
    //stubbing fetchGifs from actions/gifs.js and not the entire func
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should dispatch the action", () => {
    const store = mockStore([]);
    const mockValue = [];
    fetchGifStub.resolves({ data: mockValue });
    return store.dispatch(gifActions.fetchFromGiphy()).then(() => {
      const action = store.getActions()[0];
      expect(action).to.equal({ type: types.GIFS_FETCH, gifs: mockValue });
    });
  });
});
