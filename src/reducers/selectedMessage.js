//This is a reducer that handles whatever action i decide to do with a message
import {EDIT_MESSAGE, EDITED_MESSAGE} from '../constants/action-types'

const selectedMessage = (state=null, action)=> {
	switch(action.type){
		case EDIT_MESSAGE:
		//make this state equal to the number that was paased into the action payload of edit message
			return action.payload.number;
		case EDITED_MESSAGE:
		//the moment the message is edited and the enter key is pressed to dispatch this function, change this state back to null
			return null
		default:
			return state;
	}
}

export default selectedMessage