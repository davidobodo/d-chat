import { takeEvery, put, all } from "redux-saga/effects";

import { REQUEST_SIGNUP_START } from "../constants/action-types";

import { requestSignUpStart } from "../actions/authActions";

//worker saga: fired on each REQUEST_SIGNUP_START action
function* handleUserSignUp({ payload }) {
    try {
        console.log(payload)
    } catch{

    }
}

//watcher saga: watches for which action is fired
function* watchSignUpUser() {
    yield takeEvery(REQUEST_SIGNUP_START, handleUserSignUp);
}

export default function* () {
    yield all([watchSignUpUser()]);
}
