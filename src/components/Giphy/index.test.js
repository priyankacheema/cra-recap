import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import { Giphy } from "./";
import Chance from "chance";
import sinon from "sinon";

describe("Given Giphy", () => {
  //props is always an object
  //overrides ={key:value} pair
  function requiredProps(overrides = {}) {
    return {
      fetchFromGiphy: sinon.spy(),
      ...overrides
    };
  }
  function renderComponent(props = requiredProps()) {
    return shallow(<Giphy {...props} />);
  }

  it("should exist with a specifying class name", () => {
    const component = renderComponent();
    expect(component.is("section.giphy")).to.be.true();
  });

  it("should exist with a specifying class name", () => {
    const component = renderComponent();
    expect(component.find("ul.giphy-list").length).to.equal(1);
  });

  describe('When there are "giphyItems" props', () => {
    it("should render that many GifItems", () => {
      const chance = new Chance();
      const gifs = [{ id: chance.string() }, { id: chance.string() }];
      const component = renderComponent({
        fetchFromGiphy: sinon.spy(),
        giphyItems: gifs
      });
      expect(component.find("GiphyItem").length).to.equal(gifs.length);
    });
  });
});
