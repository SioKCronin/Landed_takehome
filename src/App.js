import React from "react";
import ReactDOM from "react-dom";

import AgentListContainer from "./agentListContainer";
import Form from "./form";

const App = () => (
  <>
    <h1>Landed</h1>

    {/* <Form /> */}

    <AgentListContainer />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
