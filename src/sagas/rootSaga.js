import { all } from "redux-saga/effects";
import signUpSaga from "./signUpSaga";
import loginSaga from "./loginSaga";
import signOutSaga from "./signOutSaga";
import messagesSaga from "./messagesSaga";

export default function* rootSaga() {
    yield all([
        signUpSaga(),
        loginSaga(),
        signOutSaga(),
        messagesSaga(),
    ]);
};