import {
	SET_RECEIVER_ID,
	UNSET_RECEIVER_ID,
	SET_TYPING_VALUE,
	SEND_MESSAGE_START,
	SEND_MESSAGE_SUCCESS,
	SEND_MESSAGE_FAIL,
	DELETE_MESSAGE,
	EDIT_MESSAGE,
	EDITED_MESSAGE,
	DETAILS_INFO,
	POST_USER_STATUS_START,
	POST_USER_STATUS_SUCCESS,
	POST_USER_STATUS_FAIL,
	POST_PROFILE_PICTURE_START,
	// POST_PROFILE_PICTURE_SUCCESS,
	// POST_PROFILE_PICTURE_FAIL

} from '../constants/action-types'

export const setactiveChatUserId = (id) => {
	return {
		type: SET_RECEIVER_ID,
		id
	}
}

export const unsetActiveUser = (activeUserId) => {
	return {
		type: UNSET_RECEIVER_ID,
		payload: activeUserId
	}
}

export const setTypingValue = (value) => {
	return {
		type: SET_TYPING_VALUE,
		payload: value
	}
}

export const sendMessageStart = (message, messageId, senderId, receiverId) => {
	return {
		type: SEND_MESSAGE_START,
		payload: {
			message,
			messageId,
			senderId,
			receiverId
		}
	}
}

export const sendMessageSuccess = (payload) => {
	return {
		type: SEND_MESSAGE_SUCCESS,
		payload
	}
}

export const sendMessageFail = (error) => {
	return {
		type: SEND_MESSAGE_FAIL,
		error
	}
}

export const deleteMessage = (number, activeUserId) => {
	return {
		type: DELETE_MESSAGE,
		payload: {
			number,
			activeUserId
		}
	}
}

export const editMessage = (number, text, activeUserId) => {
	return {
		type: EDIT_MESSAGE,
		payload: {
			number,
			text,
			activeUserId
		}
	}
}

export const editedMessage = (typing, activeUserId, selectedMessage) => {
	return {
		type: EDITED_MESSAGE,
		payload: {
			typing,
			activeUserId,
			selectedMessage
		}
	}
}

export const details = (number, text, is_user_msg, activeUserId) => {
	return {
		type: DETAILS_INFO,
		payload: {
			number,
			text,
			is_user_msg,
			activeUserId
		}
	}
}

export const postUserStatusStart = (userStatus, userId) => {
	return {
		type: POST_USER_STATUS_START,
		userStatus,
		userId,
	}
}

export const postUserStatusSuccess = () => {
	return {
		type: POST_USER_STATUS_SUCCESS,
	}
}
export const postUserStatusFail = (error) => {
	return {
		type: POST_USER_STATUS_FAIL,
		error
	}
}

export const postProfilePictureStart = (picture, userId) => {
	return {
		type: POST_PROFILE_PICTURE_START,
		picture,
		userId
	}
}

export const postProfilePictureFail = (error) => {
	console.log(error)
	return {
		type: POST_PROFILE_PICTURE_START,
		error
	}
}

