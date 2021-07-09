import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Form.css";

const NewTicket = ({ submitForm, isAgentList }) => {
  const [agent, setAgent] = useState("");
  const [values, setValues] = useState({
    name: "",
    description: "",
    assigned_to: "",
    category: "",
    sub_category: "",
    priority: "",
    create_at: "",
    update_at: "",
    complete_at: "",
    status_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAgentChange = (e) => {
    setAgent(e.target.selectedIndex);
    console.log("agent id is =", e.target.selectedIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newTicket = {
    //   name: values.name,
    //   description: values.description,
    //   assigned_to: values.assigned_to,
    //   category: values.category,
    // };

    // fetch("http://localhost:3000/tickets", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTicket),
    // });
  };

  console.log("isAgentList", isAgentList);

  return (
    <div>
      <div className="form-content">
        <header>Ticket Form</header>
        <form className="ticket-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Ticket Name" className="form-label">
              Ticket Name
            </label>
            <input
              id="name"
              className="form-field"
              placeholder="Enter your Ticket Name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              id="description"
              className="form-field"
              placeholder="Enter your Description"
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <label
              htmlFor="Assigned To"
              className="form-label"
              name="assigned_to"
              id="assigned_to"
              value={values.assigned_to}
            >
              {" "}
              Assigned To
            </label>
            <select onChange={handleAgentChange}>
              <option value="Select a Agent"> Select a Agent</option>
              {/* {isAgentList.map((agent) => (
                <option value={agent.id}> {agent.firstname} </option>
              ))} */}
            </select>
          </div>
          <br></br>

          <div class="container-fluid">
            <div class="dropdown">
              <label htmlFor="Category" className="form-label">
                Category
              </label>
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                <div class="caret"> </div>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="">IT</a>
                </li>
                <li>
                  <a href="">Computer</a>
                </li>
              </ul>
            </div>
          </div>

          <br></br>
          <div>
            <textarea placeholder="Please provide any additonal details">
              
            </textarea>
          </div>
          <div>
            <button className="form-field" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;
