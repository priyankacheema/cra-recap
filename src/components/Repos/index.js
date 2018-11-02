import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchFromRepos } from "../../actions/repos";
import { connect } from "react-redux";

class Repos extends Component {
  componentDidMount() {
    this.props.fetchFromRepos("priyankacheema");
  }
  render() {
    return (
      <section className="repos">
        <ul className="repos-list">{renderlist(this.props.repoItems)}</ul>
      </section>
    );
  }
}

function renderlist(repos) {
  return repos.map(repo => <RepoItem key={repo.id} />);
}

Repos.defaultProps = {
  repoItems: []
};

const RepoItem = () => {
  return <li />;
};

export default connect(
  undefined,
  { fetchFromRepos }
)(Repos);
