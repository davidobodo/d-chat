import firebase from 'firebase/app';
import { firestore } from '../index';
import { takeEvery, put, all, call } from "redux-saga/effects";
import { REQUEST_USERLOGIN_START } from "../constants/action-types";
import { requestUserLoginSuccess, requestUserLoginError } from '../actions/authActions';

//worker saga: fired on each REQUEST_USERLOGIN_START action
function* handleUserLogin({ payload }) {
    const { email, password } = payload;
    console.log(email, password)
    try {
        const auth = firebase.auth()
        const user = yield call(
            [auth, auth.signInWithEmailAndPassword],
            email,
            password
        )
        yield put(requestUserLoginSuccess(user))

    } catch (err) {
        yield put(requestUserLoginError(err.message))
    }
}

//watcher saga: watches for which action is fired
function* watchLoginUser() {
    yield takeEvery(REQUEST_USERLOGIN_START, handleUserLogin);
}

export default function* () {
    yield all([watchLoginUser()]);
}