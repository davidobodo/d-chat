import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import { requestSignUpStart } from '../actions/authActions';
import "./signup.css";
import blob1 from "../assets/images/blob1.svg";
import blob2 from "../assets/images/blob2.svg";


const INPUT_FIELDS = [
    {
        name: 'firstName',
        type: 'text',
        placeholder: 'firstName',
        icon: faUser
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: 'lastName',
        icon: faUser
    },

    {
        name: 'email',
        type: 'email',
        placeholder: 'email',
        icon: faEnvelopeOpenText
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password',
        icon: faUnlockAlt
    },
    {
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'confirmPassword',
        icon: faUnlockAlt
    },
]



const SignUp = ({ handleSetAuthState, requestCreateAccount }) => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(requestSignUpStart(userDetails));
    }

    const should_scale = requestCreateAccount ? "signup-wrapper scale-up" : "signup-wrapper";

    return (
        <div className={should_scale}>
            <div className="back-icon" onClick={handleSetAuthState}>&#8592;</div>
            <img src={blob2} alt="blob2" className="orange-image" />
            <h2>Create account</h2>
            <form onSubmit={handleOnSubmit} noValidate>
                {INPUT_FIELDS.map(field => {
                    const { name, type, placeholder, icon } = field;
                    return (
                        <div className="signup-form-input" key={name}>
                            <FontAwesomeIcon icon={icon} />
                            <input
                                type={type}
                                placeholder={placeholder}
                                onChange={handleOnChange}
                                name={name} />
                        </div>)
                })}
                <button>Create</button>
            </form>
            <img src={blob1} alt="blob1" className="blue-image" />
        </div>
    )
}

export default SignUp