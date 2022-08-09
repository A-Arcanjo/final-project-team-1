import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const CustomerSignup = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // create a new user
    const newUser = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      username: formValues.username,
      emailAddress: formValues.emailAddress,
      password: formValues.password,
    };
<<<<<<< HEAD
    console.log(newUser);
=======
    
>>>>>>> 38fc06ea7b65d39eaa8106cbf97e481f1a67ad47
    // settings
    const settings = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    };
    
    // POST REQUEST
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/registerCustomer",
      settings
    );
    const parsedRes = await response.json();

    try {
      if (response.ok) {
        props.setCurrentUserId(parsedRes.id);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      } else {
        throw new Error(parsedRes.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const validate = (values) => {
    const errors = {};
    // const regex =
    //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.emailAddress) {
      errors.emailAddress = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const navigate = useNavigate();

  return (
    <div className="signup-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/home")
      ) : (
        <p></p>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <hr />
        <div className="form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.firstName}</p>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.lastName}</p>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email"
              value={formValues.emailAddress}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.emailAddress}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="err">{formErrors.password}</p>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerSignup;
