import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { requestUserLogin } from "../actions/authActions";

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

export default Login