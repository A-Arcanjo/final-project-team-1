import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const BusinessSignup = () => {

    const initialValues = { username:"", fullName:"", companyName:"", city:"", street:"", zipCode:"", businessTelephone:"", email:"", password:"" };

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

        if(!values.fullName) {
            errors.fullName = "Full name is required";
        }

        if(!values.companyName) {
            errors.companyName = "Company name is required";
        }

        if(!values.city) {
            errors.city = "required";
        }

        if(!values.street) {
            errors.street = "required";
        }

        if(!values.zipCode) {
            errors.zipCode = "required";
        }

        if(!values.businessTelephone) {
            errors.businessTelephone = "required";
        }

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

    const navigate = useNavigate();
    
    return (
        <div className="signup-container">
            {Object.keys(formErrors).length === 0 && isSubmit? ( navigate("/signin") ): (<p></p>)}
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <hr/>
                <div className="form">
                    <div className="field">
                        <label>Full Name</label>
                        <input type="text" name="fullName" placeholder="Full Name" value={ formValues.fullName } onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.fullName}</p>
                    <div className="field">
                        <label>Company Name</label>
                        <input type="text" name="companyName" placeholder="Company Name" value={ formValues.companyName } onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.companyName}</p>
                    <div className="field">
                        <div className="address">
                            <div className="address-input">
                                <label>City</label>
                                <input type="text" name="city" placeholder="City" value={ formValues.city } onChange={handleChange} />
                                <p className="err">{formErrors.city}</p>
                            </div>
                            <div className="address-input">
                                <label>Zip Code</label>
                                <input type="number" name="zipCode" placeholder="Zip Code" value={ formValues.zipCode } onChange={handleChange} />
                                <p className="err">{formErrors.zipCode}</p>
                            </div>
                            <div className="address-input">
                                <label>Street</label>
                                <input type="text" name="street" placeholder="Street" value={ formValues.street } onChange={handleChange} />
                                <p className="err">{formErrors.street}</p>
                            </div>
                            <div className="address-input">
                                <label>Telephone</label>
                                <input type="number" name="businessTelephone" placeholder="Telephone" value={ formValues.businessTelephone } onChange={handleChange} />
                                <p className="err">{formErrors.businessTelephone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={ formValues.username } onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={ formValues.email } onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={ formValues.password } onChange={handleChange} />
                    </div>
                    <p className="err">{formErrors.password}</p>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
};

export default BusinessSignup;