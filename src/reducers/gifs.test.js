import { expect } from "code";
import gifReducer from "./gifs";
import types from "../actions/action-list";

describe("Given gifsReducer", () => {
  it("shuld return the default state", () => {
    expect(gifReducer(undefined, {})).to.equal([]);
  });

  it("should return the gifs", () => {
    const mockAction = {
      type: types.GIFS_FETCH,
      gifs: [{}]
    };
    expect(gifReducer([], mockAction)).to.equal([{}]);
  });
});
