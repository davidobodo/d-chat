import React from "react";

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
    return (
        <form>
            {INPUT_FIELDS.map(field => {
                const { name, type, placeholder } = field;
                return (
                    <div className="form-input" key={name}>
                        <label>{name}</label>
                        <input type={type} placeholder={placeholder} />
                    </div>)
            })}
        </form>
    )
}

export default Login