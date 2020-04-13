import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_USERLOGIN_START,
    REQUEST_USERLOGIN_SUCCESS,
    REQUEST_USERLOGIN_FAIL,
} from "../constants/action-types";

const initialState = {
    user: null,
    isLoading: false,
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case REQUEST_SIGNUP_START:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
                user: payload,
                isLoading: false
            };
        case REQUEST_SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false
            };
        case REQUEST_USERLOGIN_START:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_USERLOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case REQUEST_USERLOGIN_FAIL:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}