import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

//work on formdata - form submit on login & login route
const Login = ({ submitForm, currentUser, setCurrentUser }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      .then((userObj) => {
        if (userObj.errors) {
          setErrors(userObj.errors);
        } else {
          setCurrentUser(userObj)
          history.push(`/`);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // setErrors(validate(values));//onChange very aggressive
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //   }
  // }, [errors]);

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

export default Login;
