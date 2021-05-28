import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSubmit = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  // const [supervisor, setSupervisor] = useState({
  //   supList: [],
  // });

  // useEffect(() => {
  //   fetch("https://6099a4760f5a13001721985c.mockapi.io/api/supervisors")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSupervisor({ supList: data.results });
  //     });
  // }, []);

  return (
    <div>
      <div className="form-content">
        <header>Notification Form</header>
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              className="form-field"
              placeholder="Enter your First Name"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              className="form-field"
              placeholder="Enter your Last Name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          {errors.checked && <p>{errors.checked}</p>}

            <div className="contact-method">
            How would you prefer to be notified?
            <input
              id="email-checkbox"
              type="radio"
              onChange={handleChange}
              value="email"
              className="form-field"
              placeholder="Email"
              name="checked"
            />
            <label htmlFor="email">
              {" "}
              Email{" "}
            </label>
            <input
              id="email"
              type="email"
              className="form-field"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <input
              id="phoneNumber-checkbox"
              type="radio"
              value="phone"
              onChange={handleChange}
              className="form-field"
              placeholder="Phone Number"
              name="checked"
            />
            <label htmlFor="phoneNumber">
              {" "}
              Phone Number{" "}
            </label>
            <input
              id="phoneNumber"
              className="form-field"
              placeholder="(XXX) XXX - XXXX"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            {errors.selection && <p>{errors.selection}</p>}

          </div>

          {/* <div>
            <label htmlFor="supervisorDropdown" className="form-label">
              Supervisor
            </label>
            <select id="supervisor" name="supervisor" onChange={handleChange}>
              <option disabled selected>
                -- Select --
              </option>
              {supervisor.supList.map((x) => {
                return (
                  <option value={x.login.uuid}>
                    {x.name.first} {x.name.last}
                  </option>
                );
              })}
            </select>
            {errors.supervisor && <p>{errors.supervisor}</p>}
          </div> */}


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

export default FormSubmit;
