import React from "react";
import { Router } from "@reach/router";
import NavHeader from "./shared/NavHeader";
import Giphy from "./Giphy";
import Repos from "./Repos";

const App = () => {
  return (
    <main>
      <NavHeader />
      <Router>
        <Giphy path="/giphy" />
        <Repos path="/repos" />
      </Router>
    </main>
  );
};

export default App;
