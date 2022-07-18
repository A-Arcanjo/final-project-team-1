import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {

    const initialValues = { username:"", email:"", password:"" };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
        }
    },[formErrors])

    const handleChange = event => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value })
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!values.username) {
            errors.username = "Username is required";
        }
        if(!values.email) {
            errors.email = "Email is required";
        }
        if(!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    }

    const history = useNavigate();
    
    return (
        <div className="signup-container">
            {Object.keys(formErrors).length === 0 && isSubmit? ( history("/signin") ): (<p></p>)}
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <hr/>
                <div className="form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={ formValues.username } onChange={handleChange} />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={ formValues.email } onChange={handleChange} />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={ formValues.password } onChange={handleChange} />
                    </div>
                    <p>{formErrors.password}</p>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
};

export default Signup;