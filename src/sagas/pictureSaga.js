import { takeEvery, put, all, call } from "redux-saga/effects";
import { POST_PROFILE_PICTURE_START } from "../constants/action-types";
import { rsf } from "../index";
import { postProfilePictureFail } from "../actions/action";


function* handlePostProfilePicture({ picture, userId }) {
    try {
        const doc = yield call(
            rsf.firestore.addDocument,
            'pictures',
            {
                picture,
                pictureUserId: userId
            }
        )
        console.log(doc, "success")
    } catch (err) {
        yield put(postProfilePictureFail(err.message))
    }
}

function* watchPostProfilePicture() {
    yield takeEvery(POST_PROFILE_PICTURE_START, handlePostProfilePicture);
}

export default function* () {
    yield all([watchPostProfilePicture()])
}