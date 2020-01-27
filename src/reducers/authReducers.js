import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
} from "../constants/action-types";

const initialState = {

}

export default (state = initialState, action) => {
    const { type, payload, error } = action
    switch (type) {
        case REQUEST_SIGNUP_START:
            return {
                ...state,
            };
        case REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
            };
        case REQUEST_SIGNUP_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}