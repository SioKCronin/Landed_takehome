import React, { useState } from "react";

function FilterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstTimeAgent, setFirstTimeAgent] = useState(false);
  const [region, setRegion] = useState([]);
  const [personas, setPersonas] = useState([]);
  return (
    <>
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
          onChange={e => setFirstTimeAgent(!firstTimeAgent)}
          defaultChecked={false}
          name="first_time_agent"
          type="checkbox"
          id="first_time_agent"
        />
        First time agent
      </label>
      {/* <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>First Time Agent: {firstTimeAgent ? "True" : "False"}</p>
      <p>Regions: {region}</p>
      <p>Personas: {personas}</p> */}
    </>
  );
}
export default FilterForm;
