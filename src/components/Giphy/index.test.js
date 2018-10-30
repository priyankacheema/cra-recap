import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import Giphy from "./";

describe("Given Giphy", () => {
  it("should exist with a specifying class name", () => {
    const component = shallow(<Giphy />);

    expect(component.is("ul.giphy-list")).to.be.true();
  });
});
