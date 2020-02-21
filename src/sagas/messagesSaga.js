import { takeEvery, put, all, call } from "redux-saga/effects";
import { SEND_MESSAGE_START } from "../constants/action-types";
import { rsf } from "../index";


function* handleSendMessage({ payload }) {
    const { message, messageId, receiverId, userId } = payload;
    try {
        const doc = yield call(
            rsf.firestore.addDocument,
            'messages',
            {
                message,
                messageId,
                receiverId,
                userId
            }
        )
        console.log(doc, "success")
    } catch (err) {
        console.log(err, "fail")
    }
}

function* watchSendMessage() {
    yield takeEvery(SEND_MESSAGE_START, handleSendMessage);
}

export default function* () {
    yield all([watchSendMessage()])
}