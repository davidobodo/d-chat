import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../../components/login/Login';
import SignUp from '../../components/signup/SignUp';
import './auth.css';
import blob from "../../assets/images/blob1.svg";

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
            <img src={blob} alt="blob" className="auth__wrapper__img" />
        </div>
    )
}

export default Auth;