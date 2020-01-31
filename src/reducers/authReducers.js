import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_USERLOGIN_START,
    REQUEST_USERLOGIN_SUCCESS,
    REQUEST_USERLOGIN_FAIL,
} from "../constants/action-types";

const initialState = {
    user: null
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
                user: payload
            };
        case REQUEST_SIGNUP_FAIL:
            return {
                ...state,
            };
        case REQUEST_USERLOGIN_START:
            return {
                ...state,
            };
        case REQUEST_USERLOGIN_SUCCESS:
            return {
                ...state,
            };
        case REQUEST_USERLOGIN_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}