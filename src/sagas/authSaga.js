import { reduxSagaFirebase } from '../index';
import firebase from 'firebase/app';
import '@firebase/firestore'

import { takeEvery, put, all, call } from "redux-saga/effects";
import { REQUEST_SIGNUP_START } from "../constants/action-types";

import { requestSignUpSuccess } from '../actions/authActions';


//worker saga: fired on each REQUEST_SIGNUP_START action
function* handleUserSignUp({ payload }) {
    const { email, password, firstName, lastName } = payload;
    try {
        // const data = yield fetch(reduxSagaFirebase.auth.createUserWithEmailAndPassword(email, password), {
        //     email: email,
        //     password: password
        // })
        const auth = firebase.auth()
        const user = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            email,
            password
        )
        yield put(requestSignUpSuccess(user))
        // console.log(data)
        // if (data.ok) {
        //     return firebase.firestore().collection('users').doc(data).set({
        //         firstName: firstName,
        //         lastName: lastName,
        //     });
        // } else {
        //     console.log(data)
        // }
        // yield put(requestSignUpSuccess(data))
    } catch (err) {
        console.log(err)
    }
}

//watcher saga: watches for which action is fired
function* watchSignUpUser() {
    yield takeEvery(REQUEST_SIGNUP_START, handleUserSignUp);
}

export default function* () {
    yield all([watchSignUpUser()]);
}
