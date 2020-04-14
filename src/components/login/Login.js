import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as EmailValidator from "email-validator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

import { requestUserLogin } from "../../actions/authActions";
import blob from "../../assets/images/blob2.svg";
import "./login.css";


const Login = ({ handleSetAuthState, requestCreateAccount }) => {
    const dispatch = useDispatch();

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    })
    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrormessage, setPasswordErrorMessage] = useState('');

    let _emailHasError = false;
    let _passwordHasError = false;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleOnKeyDown = e => {
        const { name } = e.target;
        const { password, email } = userDetails;
        if (e.key === 'Enter') return;

        if (name === 'email') {
            if (EmailValidator.validate(email)) {
                setEmailHasError(false)
            }
        }

        if (name === 'password' && password.length + 1 >= 6) {
            setPasswordHasError(false)
        }
    }

    const handleValidateForm = () => {
        const { email, password } = userDetails;

        if (password.length < 6) {
            _passwordHasError = true;
            setPasswordHasError(true);
            setPasswordErrorMessage('Password must be more than 6 characters')
        }

        if (!EmailValidator.validate(email)) {
            _emailHasError = true;
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        if (_emailHasError || _passwordHasError) return true;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const err = handleValidateForm();
        console.log(err)

        if (err) return
        dispatch(requestUserLogin(userDetails));
    }


    const INPUT_FIELDS = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'email',
            icon: faUser,
            inputHasError: emailHasError,
            inputErrorMessage: emailErrorMessage
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'password',
            icon: faUnlockAlt,
            inputHasError: passwordHasError,
            inputErrorMessage: passwordErrormessage
        },
    ]



    return (
        <div className={requestCreateAccount ? "login-wrapper scale-down" : "login-wrapper"}>
            <h1>Hello</h1>
            <h3>Sign in to your account</h3>
            <img src={blob} alt="blob" className="login-wrapper__image" />
            <form onSubmit={handleOnSubmit} noValidate>
                {INPUT_FIELDS.map(field => {
                    const { name, type, placeholder, icon, inputHasError, inputErrorMessage } = field;
                    return (
                        <div className={inputHasError ? ["login-form-input", "error"].join(' ') : "login-form-input"} key={name}>
                            <FontAwesomeIcon icon={icon} />
                            <input
                                type={type}
                                placeholder={placeholder}
                                onKeyDown={handleOnKeyDown}
                                onChange={handleOnChange}
                                name={name} />
                            {inputHasError && <div className='error-message'>{inputErrorMessage}</div>}
                        </div>)
                })}
                <button className="forgot-password">Forgot your password?</button>
                <div className="login-btn">
                    Sign in<button><i className="fas fa-long-arrow-alt-right"></i></button>
                </div>
            </form>
            <h5>Don't have an account? <button onClick={handleSetAuthState} className='create-btn'>Create</button></h5>
        </div>
    )
}

export default Login