import {
	SET_ACTIVE_USER_ID,
	UNSET_ACTIVE_USER,
	SET_TYPING_VALUE,
	SEND_MESSAGE,
	DELETE_MESSAGE,
	EDIT_MESSAGE,
	EDITED_MESSAGE,
	DETAILS_INFO

} from '../constants/action-types'

//All these imports are just strings, nothing more

export const setActiveUserId = (id)=>{
	//the id parameter we receive here is the same as the user_id that was passed in, when the function was dispatch. We only just changed name
	return {
		type: SET_ACTIVE_USER_ID,
		payload:id
	}
	//This then moves on to the reducer.
}

export const unsetActiveUser =(activeUserId) =>{
	//takes in the activeuserId as payload (though we wouldnt really use the value for anything)
	 return{
	 	type:UNSET_ACTIVE_USER,
	 	payload:activeUserId
	 }
}

export const setTypingValue = (value) => {
	return{
		type: SET_TYPING_VALUE,
		payload: value
	}
}

export const sendMessage = (message, userId) => {
	return {
		type: SEND_MESSAGE,
		payload: {
			message,
			userId
		}
	}
}

export const deleteMessage = (number, activeUserId) => {
	return{
		type: DELETE_MESSAGE,
		payload : {
			number,
			activeUserId
		}
	}
}

export const editMessage = (number,text, activeUserId) => {
	return{
		type: EDIT_MESSAGE,
		payload: {
			number,
			text,
			activeUserId
		}
	}
}

export const editedMessage = (typing, activeUserId,selectedMessage) => {
	return{
		type: EDITED_MESSAGE,
		payload : {
			typing,
			activeUserId,
			selectedMessage
		}
	}
}

export const details = (number,text,is_user_msg,activeUserId)=> {
	//receive all as payload from chats file
	return{
		type:DETAILS_INFO,
		payload:{
			number,
			text,
			is_user_msg,
			activeUserId
		}
	}
}

