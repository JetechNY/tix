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
          <div>
            <label htmlFor="Assigned To" className="form-label">
              Assigned To
            </label>
          </div>
          <div>
            <label htmlFor="Sub Category" className="form-label">
              Sub Category
            </label>
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
