import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import FilterForm from "./filterForm";
import AgentList from "./agentList";

function AgentListContainer() {
  const agents = data.agents;
  const [filteredAgents, setFilteredAgents] = useState(data.agents);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstTimeAgent, setFirstTimeAgent] = useState([]);
  const [region, setRegion] = useState([]);
  const [personas, setPersonas] = useState([]);

  const handleChange = () => {
    console.log("Form Changed");
  };

  let filter = {
    first_name: firstName,
    last_name: lastName,
    first_time_agent: firstTimeAgent,
    region: region,
    persona: personas
  };

  const buildFilter = filter => {
    let query = {};
    for (let keys in filter) {
      if (
        (filter[keys].constructor === Array && filter[keys].length > 0) ||
        filter[keys].constructor === String
      ) {
        query[keys] = filter[keys];
      }
    }
    return query;
  };

  const filterData = (agents, query) => {
    const filteredData = agents.filter(item => {
      for (let key in query) {
        if (typeof query[key] === "string") {
          if (
            item[key] === undefined ||
            !item[key].toLowerCase().includes(query[key].toLowerCase())
          )
            return false;
        } else {
          if (item[key] === undefined || !query[key].includes(item[key])) {
            return false;
          }
        }
      }
      return true;
    });
    return filteredData;
  };

  const query = buildFilter(filter);

  useEffect(() => {
    setFilteredAgents(filterData(agents, query));
  }, [firstName, lastName, firstTimeAgent, region, personas]);

  return (
    <div>
      {/* <button onClick={() => setFilteredAgents(filterData(agents, query))}>
        Test Filter
      </button> */}
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First Name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last Name"
        type="text"
        name="lastName"
        required
      />
      <select
        id="region"
        multiple
        name="region"
        onChange={e =>
          setRegion(Array.from(e.target.selectedOptions).map(o => o.value))
        }
      >
        <option value="Bay Area">Bay Area</option>
        <option value="Denver">Denver</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Portland">Portland</option>
        <option value="Seattle">Seattle</option>
      </select>
      <select
        id="personas"
        multiple
        name="personas"
        onChange={e =>
          setPersonas(Array.from(e.target.selectedOptions).map(o => o.value))
        }
      >
        <option value="Funny">Funny</option>
        <option value="Adventurous">Adventurous</option>
        <option value="Professional">Professional</option>
      </select>
      <label className="checkbox">
        <input
          onChange={e => setFirstTimeAgent(e.target.checked ? [true] : [])}
          defaultChecked={false}
          name="first_time_agent"
          type="checkbox"
          id="first_time_agent"
        />
        First time agent
      </label>
      <AgentList filteredAgents={filteredAgents} />
    </div>
  );
}

export default AgentListContainer;
