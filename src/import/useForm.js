import { useState, useEffect, useRef } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    // loading: true,
    // firstName: "",
    // lastName: "",
    // email: "",
    // phoneNumber: "",
    // supervisor: "",
    // checked: "",

    email: "",
    password: "",
    firstname: "",
    lastname: "",
    is_agent: "",
    is_admin: "",
  });

  const [errors, setErrors] = useState({});

//   const errorRef = useRef(errors);
// errorRef.current= errors

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validate(values));//onChange very aggressive

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("errorsRef", errorRef.current)
    console.log("errors", errors)
    console.log("values", values)
    setErrors(validate(values));//onChange not submit
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      handleComplete(values);
    }
  };

  const handleComplete = (values) => {
    console.log("values", values)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        res.json();
      })
      .catch((error) => console.log("Error", error))
      .then((response) => console.log("Response", response));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
