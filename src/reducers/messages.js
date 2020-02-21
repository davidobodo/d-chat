import { SEND_MESSAGE_START, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from "../constants/action-types";
import { DELETE_MESSAGE } from "../constants/action-types";
import { EDITED_MESSAGE } from "../constants/action-types";
import _ from 'lodash'

const initialState = {
	1: {
		messageId: 1,
		message: 'hello there',
		userId: 1111,
		activeChatUserId: 2222,
	},
	2: {
		messageId: 2,
		message: 'hey',
		userId: 1111,
		activeChatUserId: 2222,
	},
	3: {
		messageId: 3,
		message: 'hi man',
		userId: 2222,
		activeChatUserId: 1111,
	},
	4: {
		messageId: 4,
		message: 'so whats up',
		userId: 2222,
		activeChatUserId: 1111,
	},
	5: {
		messageId: 5,
		message: `i'm doing good`,
		userId: 1111,
		activeChatUserId: 2222,
	},
}

const messages = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE_START:
			let { message, messageId, userId, activeChatUserId } = action.payload;
			return {
				...state,
				[messageId]: {
					messageId,
					message,
					userId,
					activeChatUserId
				}
			};
		case SEND_MESSAGE_SUCCESS:
			return {
				...state
			};
		case SEND_MESSAGE_FAIL:
			return {
				...state
			}
		case DELETE_MESSAGE:
			messageId = action.payload.number;
			const activeUserId = action.payload.activeUserId;
			return {
				...state,
				[activeUserId]: _.omit(state[activeUserId], messageId)
			};
		case EDITED_MESSAGE:
			//take the text in the typing field
			const text = action.payload.typing;
			//the person i am chatting with
			const id = action.payload.activeUserId;
			// the number of the message i was editing
			const msg = action.payload.selectedMessage
			//mutate state
			//put all these info in the same number in the message array
			return {
				...state,
				[id]: {
					...state[id],
					[msg]: {
						number: msg,
						text: text + "(edited)",
						is_user_msg: true
					}
				}

			}
		default:
			return state;
	}
}

export default messages

