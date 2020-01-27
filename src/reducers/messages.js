import { getMessages } from "../static-data"
import { SEND_MESSAGE } from "../constants/action-types";
import { DELETE_MESSAGE } from "../constants/action-types";
import { EDITED_MESSAGE } from "../constants/action-types";
import _ from 'lodash'


const messages =(state=getMessages(10), action)=>{
	switch(action.type){
		case SEND_MESSAGE:
		const{message, userId} = action.payload;
		const allUserMsgs = state[userId];
		const number = +_.keys(allUserMsgs).pop()+1;
			return {
				...state,
				[userId]:{
					...allUserMsgs,
					[number]:{
						number,
						text:message,
						is_user_msg:true
					}
				}
			};
		case DELETE_MESSAGE:

		//take it the message number and activeuserid
			const messageId = action.payload.number;
			const activeUserId =action.payload.activeUserId;
		//run the omit lodash method on the state using the particulat activeuserid and number of message as parameters
			return{
				...state,
				[activeUserId]: _.omit(state[activeUserId],messageId)
			};
		case EDITED_MESSAGE:
		//take the text in the typing field
			const text =action.payload.typing;
		//the person i am chatting with
			const id=action.payload.activeUserId;
		// the number of the message i was editing
			const msg=action.payload.selectedMessage
			//mutate state
			//put all these info in the same number in the message array
					return {
					...state,
					[id]:{
						...state[id],
						[msg]:{
							number:msg,
							text:text + "(edited)",
							is_user_msg:true
						}
					}
					
				}	
		default:
			return state;
	}
}

export default messages

