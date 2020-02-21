import { SET_RECEIVER_ID, UNSET_RECEIVER_ID } from '../constants/action-types'

const receiverId = (state = null, action) => {
	switch (action.type) {
		case SET_RECEIVER_ID:
			return action.id;
		case UNSET_RECEIVER_ID:
			return action.payload = null;
		default:
			return state;
	}
}

export default receiverId