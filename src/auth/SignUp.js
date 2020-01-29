import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { requestSignUpStart } from '../actions/authActions';
// import { useAuthActions } from "../useAuthActions";

const INPUT_FIELDS = [
    {
        name: 'firstName',
        type: 'text',
        placeholder: 'firstName',
    },
    {
        name: 'lastName',
        type: 'text',
        placeholder: 'lastName',
    },

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
    {
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'confirmPassword',
    },
]



const SignUp = () => {
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
        // dispatch(useAuthActions.signUp(userDetails));
    }

    return (
        <form onSubmit={handleOnSubmit} noValidate>
            {INPUT_FIELDS.map(field => {
                const { name, type, placeholder } = field;
                return (
                    <div className="form-input" key={name}>
                        <label>{name}</label>
                        <input
                            type={type}
                            placeholder={placeholder}
                            onChange={handleOnChange}
                            name={name} />
                    </div>)
            })}
            <button>Submit</button>
        </form>
    )
}

export default SignUp