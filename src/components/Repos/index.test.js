import React from "react";
import { shallow } from "enzyme";
import { expect } from "code";
import Repos from "./";
import sinon from "sinon";
import Chance from "chance";

describe("Given Repos", () => {
  function requiredProps(overrides = {}) {
    return {
      fetchFromRepos: sinon.spy(),
      ...overrides
    };
  }
  function renderComponent(props = requiredProps()) {
    return shallow(<Repos {...props} />);
  }
  it("should exist with a specifying class name", () => {
    const component = renderComponent();
    expect(component.is("section.repos")).to.be.true();
  });

  it("should exist with a specifying class name", () => {
    const component = renderComponent();
    expect(component.find("ul.repos-list").length).to.equal(1);
  });

  describe('When there are "repoItems" props', () => {
    it("should render that many RepoItems", () => {
      const chance = new Chance();
      const repos = [{ id: chance.string() }, { id: chance.string() }];
      const component = renderComponent({
        fetchFromRepos: sinon.spy(),
        repoItems: repos
      });
      expect(component.find("RepoItem").length).to.equal(repos.length);
    });
  });
});
