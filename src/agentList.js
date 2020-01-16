import React from "react";

const agentList = ({ filteredAgents }) => (
  <div id="agentList">
    <h2>Agent List</h2>
    {filteredAgents.map((agent, index) => {
      return <p key={index}>{`${agent.first_name} ${agent.last_name}`}</p>;
    })}
  </div>
);

export default agentList;
