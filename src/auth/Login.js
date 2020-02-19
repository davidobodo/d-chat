import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { requestUserLogin } from "../actions/authActions";
import "./login.css";

const INPUT_FIELDS = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'email',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password',
    },
]

const Login = () => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(requestUserLogin(userDetails));
    }

    return (
        <div className="login-wrapper">
            <h1>Hello</h1>
            <h3>Sign in to your account</h3>
            <form onSubmit={handleOnSubmit} noValidate>
                {INPUT_FIELDS.map(field => {
                    const { name, type, placeholder } = field;
                    return (
                        <div className="login-form-input" key={name}>
                            {/* <label>{name}</label> */}
                            <input
                                type={type}
                                placeholder={placeholder}
                                onChange={handleOnChange}
                                name={name} />
                        </div>)
                })}
                <a className="forgot-password">Forgot your password?</a>
                <button>Sign in</button>
            </form>
            <h5>Don't have an account? <a>Create</a></h5>
        </div>
    )
}

export default Login