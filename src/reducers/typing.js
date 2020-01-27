import { 
	SET_TYPING_VALUE,
	SEND_MESSAGE,
	EDIT_MESSAGE,
	EDITED_MESSAGE

 } from "../constants/action-types";

//initially the typing field is an empty string
const typing =(state = "", action) =>{
	switch (action.type) {
		case SET_TYPING_VALUE:
		//change that empty string to the payload that is being sent in
			return action.payload;
		case SEND_MESSAGE:
			return "";
		case EDIT_MESSAGE:
		//assign text payload to a constant
			const text = action.payload.text;
		//if the text payload has a string identical to (edited), replace that string with an empty string, and store this new string in a new constant
			const text2 = text.replace("(edited)","")
		//if the last eight letters of the string are this, assign text2 to the typing field, if not text one
			if(text.slice(-8)==="(edited)"){
				return text2;
			}else{
				return text;
			}
		//the moment edited message is triggered set this state bac to an empty string
		case EDITED_MESSAGE:
			return ""
		default:
			return state;
		}
	}

export default typing

