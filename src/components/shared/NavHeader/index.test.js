import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import NavHeader from "./";

describe("Given NavHeader", () => {
  it("should exist with a specifying class name", () => {
    const component = shallow(<NavHeader />);

    expect(component.is("nav.nav-header")).to.be.true();
  });
});
