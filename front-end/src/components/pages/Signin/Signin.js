import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {

    const initialValues = { username:"", email:"" };

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
        if(!values.username) {
            errors.username = "Username is required";
        }
        if(!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    }

    const history = useNavigate();
    
    return (
        <div className="signin-container">
            {Object.keys(formErrors).length === 0 && isSubmit? ( history("/client") ): (<></>)}
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <hr/>
                <div className="form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={ formValues.username } onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.username}</p>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={ formValues.password } onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.password}</p>
                    <button>Sign in</button>
                    <p>Not registered?<span> </span>
                        <a className="sign-button" href="Signup">
                            Sign Up
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
};

export default Signin;