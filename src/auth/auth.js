import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './auth.css';

const Auth = () => {

    const { firebase } = useSelector(state => {
        return {
            firebase: state.firebase
        }
    }, shallowEqual)

    if (firebase.auth.uid) {
        return <Redirect to="/" />
    }
    return (
        <div className='auth__wrapper'>
            <Login style={{ border: '3px solid red' }} />
            <SignUp style={{ border: '3px solid blue' }} />
        </div>
    )
}

export default Auth;