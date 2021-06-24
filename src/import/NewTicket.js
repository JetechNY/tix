import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Form.css";

const NewTicket = ({ submitForm }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              id="ticketname"
              className="form-field"
              placeholder="Enter your Ticket Name"
              type="text"
              name="ticketname"
              value={values.ticketname}
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
              name="ticketname"
              value={values.description}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="Assigned To" className="form-label">
              Assigned To
            </label>
          </div>
          <br></br>
          <div>
            <div class="container-fluid">
              <div class="dropdown">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Category<div class="caret"> </div>
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
          </div>
          <br></br>
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
