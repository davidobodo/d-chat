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

    const handleOnSubmit = (e) => {
        if (
            !firstNameHasError &&
            !lastNameHasError &&
            !emailHasError &&
            !passwordHasError
        ) {
            dispatch(requestSignUpStart(userDetails));
        }
    }

    const handleOnKeyDown = e => {
        const { name } = e.target;

        if (e.key === "Enter") return;

        if (name === "firstName") {
            setFirstNameHasError(false);
        }

        if (name === "lastName") {
            setLastNameHasError(false);
        }

        if (name === "email") {
            setEmailHasError(false);
        }

        if (name === "password" && userDetails.password.length > 6) {
            setPasswordHasError(false);
        }
    };

    const handleValidateForm = e => {
        e.preventDefault();
        const { firstName, lastName, email, password } = userDetails;
        const letters = /^[A-Za-z]+$/;

        //firstname
        if (firstName === "") {
            setFirstNameHasError(true);
            setFirstNameErrorMessage("firstName cannot be empty");
        }
        if (!firstName.match(letters)) {
            setFirstNameHasError(true);
            setFirstNameErrorMessage("firstName must include only letters");
        }

        // lastname;
        if (lastName === "") {
            setLastNameHasError(true);
            setLastNameErrorMessage("lastName cannot be empty");
        }
        if (!lastName.match(letters)) {
            setLastNameHasError(true);
            setLastNameErrorMessage("lastName must include only letters");
        }

        //email
        if (!EmailValidator.validate(email)) {
            setEmailHasError(true);
            setEmailErrorMessage("Insert a valid email");
        }

        //password
        if (password.length <= 6) {
            setPasswordHasError(true);
            setPasswordErrorMessage(
                "password must be greater than six characters"
            );
        }

        handleOnSubmit();
    };
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
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

    const should_scale = requestCreateAccount ? "signup-wrapper scale-up" : "signup-wrapper";

    return (
        <div className={should_scale}>
            <div className="back-icon" onClick={handleSetAuthState}>&#8592;</div>
            <img src={blob2} alt="blob2" className="orange-image" />
            <h2>Create account</h2>
            <form onSubmit={handleValidateForm} noValidate>
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