import React from "react";
import { Router } from "@reach/router";
import NavHeader from "./shared/NavHeader";
import Giphy from "./Giphy";

const App = () => {
  return (
    <main>
      <NavHeader />
      <Router>
        <Giphy path="/giphy" />
      </Router>
    </main>
  );
};

export default App;
