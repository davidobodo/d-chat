import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_USERLOGIN_START,
    REQUEST_USERLOGIN_SUCCESS,
    REQUEST_USERLOGIN_FAIL,
} from "../constants/action-types";

// export const requestSignUpStart = (payload) => ({
//     type: REQUEST_SIGNUP_START,
//     payload,
// })

export const requestSignUpStart = (payload) => {
    return ({
        type: REQUEST_SIGNUP_START,
        payload,
    })
}

export const requestSignUpSuccess = (payload) => {
    return ({
        type: REQUEST_SIGNUP_SUCCESS,
        payload
    })
}

export const requestSignUpError = (error) => {
    return ({
        type: REQUEST_SIGNUP_FAIL,
        error
    })
}

export const requestUserLogin = (payload) => {
    return ({
        type: REQUEST_USERLOGIN_START,
        payload
    })
}

export const requestUserLoginSuccess = (payload) => {
    return ({
        type: REQUEST_USERLOGIN_SUCCESS,
        payload
    })
}

export const requestUserLoginError = (payload) => {
    return ({
        type: REQUEST_USERLOGIN_FAIL,
        payload
    })
}