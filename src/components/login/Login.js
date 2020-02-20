import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

import { requestUserLogin } from "../../actions/authActions";
import blob from "../../assets/images/blob2.svg";
import "./login.css";

const INPUT_FIELDS = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'email',
        icon: faUser
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password',
        icon: faUnlockAlt
    },
]

const Login = ({ handleSetAuthState, requestCreateAccount }) => {
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

    const should_scale = requestCreateAccount ? "login-wrapper scale-down" : "login-wrapper";

    return (
        <div className={should_scale}>
            <h1>Hello</h1>
            <h3>Sign in to your account</h3>
            <img src={blob} alt="blob" className="login-wrapper__image" />
            <form onSubmit={handleOnSubmit} noValidate>
                {INPUT_FIELDS.map(field => {
                    const { name, type, placeholder, icon } = field;
                    return (
                        <div className="login-form-input" key={name}>
                            <FontAwesomeIcon icon={icon} />
                            <input
                                type={type}
                                placeholder={placeholder}
                                onChange={handleOnChange}
                                name={name} />
                        </div>)
                })}
                <button className="forgot-password">Forgot your password?</button>
                <div className="login-btn">
                    Sign in<button><i className="fas fa-long-arrow-alt-right"></i></button>
                </div>
            </form>
            <h5>Don't have an account? <button onClick={handleSetAuthState}>Create</button></h5>
        </div>
    )
}

export default Login