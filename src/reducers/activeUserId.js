import { SET_ACTIVE_USER_ID, UNSET_ACTIVE_USER } from '../constants/action-types'
//All these imports are just strings, nothing more

const activeUserId = (state=null, action) => {
	switch(action.type){
		case SET_ACTIVE_USER_ID:
		//the payload of this action is "Id"
		//changes the state from null to action.payload. which is the Id
			return action.payload;
		case UNSET_ACTIVE_USER:
		//set whatever value is in activeuserId to null
		//the component main renders is dependent on this hence, it renders the component that shows up when there is no activeuserid
			return action.payload = null;
		default:
			return state;
	}
}

export default activeUserId