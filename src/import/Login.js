import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

//work on formdata - form submit on login & login route
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
        <header>Log In</header>
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email"> Email </label>
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
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="form-field"
              placeholder="Password"
              name="password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          {/* //validate password field*/}


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
