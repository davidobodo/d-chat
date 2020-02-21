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
	DETAILS_INFO

} from '../constants/action-types'

export const setReceiverId = (id) => {
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

export const sendMessageStart = (message, messageId, userId, receiverId) => {
	return {
		type: SEND_MESSAGE_START,
		payload: {
			message,
			messageId,
			userId,
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
	//receive all as payload from chats file
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

