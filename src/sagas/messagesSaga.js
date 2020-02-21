import { takeEvery, put, all, call } from "redux-saga/effects";
import { SEND_MESSAGE_START } from "../constants/action-types";
import { rsf } from "../index";
import { sendMessageSuccess, sendMessageFail } from "../actions/action";


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
                userId,
                time: new Date()
            }
        )
        console.log(doc, "success")
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