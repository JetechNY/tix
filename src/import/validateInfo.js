export default function validateInfo(values) {
  let errors = {};

  const regex = /^[a-zA-Z]+$/;

  if (!values.firstname.trim()) {
    errors.firstname = " First name is required";
  } else if (!regex.test(values.firstname.trim())) {
    errors.firstname = "Enter a valid first name";
  }

  if (!values.lastname.trim()) {
    errors.lastname = " Last name is required";
  } else if (!regex.test(values.lastname.trim())) {
    errors.lastname = "Enter a valid last name";
  }

  if (!values.checked) {
    errors.checked = "Please select a notification method";
  }

  if (values.checked === "email") {
    if (!values.email) {
      errors.email = "Please enter a Email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  }
  //Fix Password validation
  // if (values.checked === "password") {
  //   if (!values.password) {
  //     errors.email = "Please enter a valid Password";
  //   } else if (!/\S+@\S+\.\S+/.test(values.password)) {
  //     errors.email = "Password is invalid";
  //   }
  // }

  if (values.checked === "phone") {
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(values.phoneNumber)) {
      errors.phoneNumber = "Please enter only numbers.";
    } else if (values.phoneNumber.length !== 10) {
      errors.phoneNumber = "Please enter valid phone number.";
    }
  }

  // if (!values.supervisor) {
  //   errors.supervisor = " Supervisor is required";
  // }

  return errors;
}
