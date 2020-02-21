import { takeEvery, put, all, call } from "redux-saga/effects";
import { SEND_MESSAGE_START } from "../constants/action-types";


function* handleSendMessage() {
    console.log("im in the saga")
}

function* watchSendMessage() {
    yield takeEvery(SEND_MESSAGE_START, handleSendMessage);
}

export default function* () {
    yield all([watchSendMessage()])
}