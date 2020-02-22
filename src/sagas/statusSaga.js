import { takeEvery, put, all, call } from "redux-saga/effects";
import { POST_USER_STATUS_START } from "../constants/action-types";
import { rsf } from "../index";
import { postUserStatusSuccess, postUserStatusFail } from "../actions/action";


function* handlePostUserStatus({ userStatus, userId }) {
    try {
        const doc = yield call(
            rsf.firestore.addDocument,
            'status',
            {
                userStatus,
                userId
            }
        )
        console.log(doc, "success")
    } catch (err) {
        yield put(postUserStatusFail(err.message))
    }
}

function* watchPostUserStatus() {
    yield takeEvery(POST_USER_STATUS_START, handlePostUserStatus);
}

export default function* () {
    yield all([watchPostUserStatus()])
}