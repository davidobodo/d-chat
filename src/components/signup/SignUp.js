import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as EmailValidator from "email-validator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import { requestSignUpStart } from '../../actions/authActions';
import "./signup.css";
import blob1 from "../../assets/images/blob1.svg";
import blob2 from "../../assets/images/blob2.svg";


const SignUp = ({ handleSetAuthState, requestCreateAccount }) => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [firstNameHasError, setFirstNameHasError] = useState(false);
    const [lastNameHasError, setLastNameHasError] = useState(false);
    const [emailHasError, setEmailHasError] = useState(false);
    const [passwordHasError, setPasswordHasError] = useState(false);

    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState();
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState();
    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState();

    let _firstNameHasError = false;
    let _lastNameHasError = false;
    let _emailHasError = false;
    let _passwordHasError = false;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }



    const handleOnKeyDown = e => {
        const { name } = e.target;
        const { password, email } = userDetails

        if (e.key === "Enter") return;

        if (name === "firstName") {
            setFirstNameHasError(false);
        }

        if (name === "lastName") {
            setLastNameHasError(false);
        }

        if (name === "email") {
            if (EmailValidator.validate(email)) {
                setEmailHasError(false);
            }
        }

        if (name === "password" && password.length + 1 >= 6) {
            setPasswordHasError(false);
        }
    };

    const handleValidateForm = () => {
        const { firstName, lastName, email, password } = userDetails;
        const letters = /^[A-Za-z]+$/;

        //firstname
        if (firstName === "") {
            _firstNameHasError = true;
            setFirstNameHasError(true);
            setFirstNameErrorMessage("firstName cannot be empty");
        }
        if (!firstName.match(letters)) {
            _firstNameHasError = true;
            setFirstNameHasError(true);
            setFirstNameErrorMessage("firstName must include only letters");
        }

        // lastname;
        if (lastName === "") {
            _lastNameHasError = true;
            setLastNameHasError(true);
            setLastNameErrorMessage("lastName cannot be empty");
        }
        if (!lastName.match(letters)) {
            _lastNameHasError = true;
            setLastNameHasError(true);
            setLastNameErrorMessage("lastName must include only letters");
        }

        //email
        if (!EmailValidator.validate(email)) {
            _emailHasError = true;
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        //password
        if (password.length < 6) {
            _passwordHasError = true;
            setPasswordHasError(true);
            setPasswordErrorMessage(
                "password must be greater than six characters"
            );
        }

        if (_firstNameHasError || _lastNameHasError || _emailHasError || _passwordHasError) return true;
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const err = handleValidateForm()

        if (err) return;
        dispatch(requestSignUpStart(userDetails));
    }


    const INPUT_FIELDS = [
        {
            name: 'firstName',
            type: 'text',
            placeholder: 'firstName',
            icon: faUser,
            inputHasError: firstNameHasError,
            inputErrorMessage: firstNameErrorMessage,
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'lastName',
            icon: faUser,
            inputHasError: lastNameHasError,
            inputErrorMessage: lastNameErrorMessage,
        },

        {
            name: 'email',
            type: 'email',
            placeholder: 'email',
            icon: faEnvelopeOpenText,
            inputHasError: emailHasError,
            inputErrorMessage: emailErrorMessage,
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'password',
            icon: faUnlockAlt,
            inputHasError: passwordHasError,
            inputErrorMessage: passwordErrorMessage,
        },
        {
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'confirmPassword',
            icon: faUnlockAlt,
            inputHasError: passwordHasError,
            inputErrorMessage: passwordErrorMessage,
        },
    ]


    return (
        <div className={requestCreateAccount ? "signup-wrapper scale-up" : "signup-wrapper"}>
            <div className="back-icon" onClick={handleSetAuthState}>&#8592;</div>
            <img src={blob2} alt="blob2" className="orange-image" />
            <h2>Create account</h2>
            <form onSubmit={handleOnSubmit} noValidate>
                {INPUT_FIELDS.map(field => {
                    const { name, type, placeholder, icon, inputHasError, inputErrorMessage } = field;
                    return (
                        <div className={inputHasError ? ["signup-form-input", "error"].join(' ') : "signup-form-input"} key={name}>
                            <FontAwesomeIcon icon={icon} />
                            <input
                                type={type}
                                placeholder={placeholder}
                                onChange={handleOnChange}
                                onKeyDown={handleOnKeyDown}
                                name={name} />
                            {inputHasError && <div className='error-message'>{inputErrorMessage}</div>}
                        </div>)
                })}
                <div className="signup-btn">
                    Create<button><i className="fas fa-long-arrow-alt-right"></i></button>
                </div>
            </form>
            <img src={blob1} alt="blob1" className="blue-image" />
        </div>
    )
}

export default SignUp