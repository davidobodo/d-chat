import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './auth.css';

const Auth = () => {
    const [requestCreateAccount, setRequestCreateAccount] = useState();
    const firebase = useSelector(state => state.firebase, shallowEqual);

    if (firebase.auth.uid) {
        return <Redirect to="/" />
    }

    return (
        <div className='auth__wrapper'>
            <Login
                handleSetAuthState={() => setRequestCreateAccount(true)}
                requestCreateAccount={requestCreateAccount} />
            <SignUp
                handleSetAuthState={() => setRequestCreateAccount(false)}
                requestCreateAccount={requestCreateAccount} />
        </div>
    )
}

export default Auth;