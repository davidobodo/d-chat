import React from 'react'
import './User.css'
import { setActiveUserId } from "../actions/action";
import store from '../store/store'

const User = ({ user }) => {
	//Each contact that was mapped into this new component(User) has properties and values
	//get those properties using destructuring
	const { name, profile_pic, status, user_id } = user;
	return (
		//asign each of the properties to the section i need them
		//make the parent div clickable
		//on click, carry out the function
		//use bind method to be able to pass parameters into the handleuserclick function
		//apparently null must always be passed in as the first parameter when using bind method
		<div className="User" onClick={handleUserClick.bind(null, user_id)}>
			<img src={profile_pic} alt={name} className="User__pic" />
			<div className="User__details">
				<p className="User__details">{name}</p>
				<p className="User__details">{status}</p>
			</div>
		</div>
	)
}

const handleUserClick = (user_id) => {
	//dispatch action using user_id parameter that was passed into this funtioninside the return tag. That means we send user_id into this action
	store.dispatch(setActiveUserId(user_id));
}
export default User