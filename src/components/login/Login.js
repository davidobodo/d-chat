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

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    // const handleOnKeyDown = e => {
    //     const { name } = e.target;
    //     if (e.key === 'Enter') return;

    //     if (name === 'email') {
    //         setEmailHasError(false)
    //     }

    //     if (name === 'password' && userDetails.password.length > 6) {
    //         setPasswordHasError(false)
    //     }
    // }

    const handleOnSubmit = () => {
        if (passwordHasError === false && emailHasError === false) {
            console.log('hello')
        }
        if (!emailHasError && !passwordHasError) {
            dispatch(requestUserLogin(userDetails));
        }
    }

    const handleValidateForm = e => {
        e.preventDefault();
        const { email, password } = userDetails;

        if (password.length <= 5) {
            setPasswordHasError(true);
            setPasswordErrorMessage('Password must be more than 6 characters')
        }

        if (!EmailValidator.validate(email)) {
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        handleOnSubmit()
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

    console.log({ emailHasError }, { passwordHasError })


    const should_scale = requestCreateAccount ? "login-wrapper scale-down" : "login-wrapper";

    return (
        <div className={should_scale}>
            <h1>Hello</h1>
            <h3>Sign in to your account</h3>
            <img src={blob} alt="blob" className="login-wrapper__image" />
            <form onSubmit={handleValidateForm} onChange={handleOnChange} noValidate>
                {INPUT_FIELDS.map(field => {
                    const { name, type, placeholder, icon, inputHasError, inputErrorMessage } = field;
                    return (
                        <div className={inputHasError ? ["login-form-input", "error"].join(' ') : "login-form-input"} key={name}>
                            <FontAwesomeIcon icon={icon} />
                            <input
                                type={type}
                                placeholder={placeholder}

                                // onKeyDown={handleOnKeyDown}
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