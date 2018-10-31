import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import NavHeader from "./shared/NavHeader";
import Giphy from "./Giphy";
import * as actionsGifs from "../actions/gifs";

export class App extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <main>
        <NavHeader>Hello</NavHeader>
        <form>
          <label>
            Enter your username
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
            <button onClick={() => this.props.fetchGifs(this.state.searchText)}>
              Submit
            </button>
          </label>
        </form>
        <Router>
          <Giphy path="/giphy" />
        </Router>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(
  mapStateToProps,
  {
    ...actionsGifs
  }
)(App);
