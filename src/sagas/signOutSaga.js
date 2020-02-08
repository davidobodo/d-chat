import firebase from "firebase/app";
import { takeEvery, put, all, call } from "redux-saga/effects";
import { SIGNOUT_START } from "../constants/action-types";
import { signOutSuccess, signOutError } from "../actions/authActions";

function* handleUserSignOut() {
    console.log('ready to sign out')
    try {
        const auth = firebase.auth();
        const user = yield call(
            [auth, auth.signOut]
        )
        yield put(signOutSuccess(user))
    } catch (err) {
        yield put(signOutError(err.message))
    }
}

function* watchSignOutUser() {
    yield takeEvery(SIGNOUT_START, handleUserSignOut)
}

export default function* () {
    yield all([watchSignOutUser()]);
}