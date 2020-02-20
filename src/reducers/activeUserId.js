import { SET_ACTIVE_USER_ID, UNSET_ACTIVE_USER } from '../constants/action-types'

const activeUserId = (state = null, action) => {
	switch (action.type) {
		case SET_ACTIVE_USER_ID:
			return action.id;
		case UNSET_ACTIVE_USER:
			return action.payload = null;
		default:
			return state;
	}
}

export default activeUserId