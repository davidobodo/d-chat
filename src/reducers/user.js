import {generateUser} from "../static-data"

const user =(state=generateUser(), action)=>{
	return state
}

export default user

//the user is the default handler of the app. The one who communicates with the rest contacts