import React from "react";
import { useState, useEffect, useRef } from "react";
import { Dropdown } from "semantic-ui-react";

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
            {/* <label htmlFor="Sub Category" className="form-label">
              Sub Category
            </label> */}

<Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      <Dropdown.Item icon='folder' text='Move to folder' />
      <Dropdown.Item icon='trash' text='Move to trash' />
      <Dropdown.Divider />
      <Dropdown.Item text='Download As...' />
      <Dropdown.Item text='Publish To Web' />
      <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
  </Dropdown>
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

