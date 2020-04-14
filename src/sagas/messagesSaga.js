import { takeEvery, put, all, call } from "redux-saga/effects";
import { SEND_MESSAGE_START } from "../constants/action-types";
import { rsf } from "../index";
import { sendMessageFail } from "../actions/action";


function* handleSendMessage({ payload }) {
    const { message, messageId, senderId, receiverId } = payload;
    try {
        yield call(
            rsf.firestore.addDocument,
            'messages',
            {
                message,
                messageId,
                senderId,
                receiverId,
                time: new Date()
            }
        )
    } catch (err) {
        yield put(sendMessageFail(err.message))
    }
}

function* watchSendMessage() {
    yield takeEvery(SEND_MESSAGE_START, handleSendMessage);
}

export default function* () {
    yield all([watchSendMessage()])
}