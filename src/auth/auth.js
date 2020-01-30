import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './auth.css';

const Auth = () => {

    return (
        <div className='auth__wrapper'>
            <Login style={{ border: '3px solid red' }} />
            <SignUp style={{ border: '3px solid blue' }} />
        </div>
    )
}

export default Auth;