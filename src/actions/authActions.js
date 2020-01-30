import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
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
    console.log(payload)
    return ({
        type: REQUEST_SIGNUP_SUCCESS,
        payload
    })
}

export const requestSignUpError = (error) => {
    console.log(error)
    return ({
        type: REQUEST_SIGNUP_FAIL,
        error
    })
}