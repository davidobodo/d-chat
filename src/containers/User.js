import React from 'react'
import './User.css'
import { setActiveUserId } from "../actions/action";
import store from '../store/store'

const User = ({ user }) => {
	const { name, profile_pic, status, user_id, firstName, lastName } = user;
	return (
		<div className="User" onClick={handleUserClick.bind(null, user_id)}>
			<img
				src={profile_pic}
				alt={name}
				className="User__pic" />
			<div className="User__details">
				<p className="User__details">{firstName} {lastName}</p>
				{/* <p className="User__details">{status}</p> */}
			</div>
		</div>
	)
}

const handleUserClick = (user_id) => {
	//dispatch action using user_id parameter that was passed into this funtioninside the return tag. That means we send user_id into this action
	store.dispatch(setActiveUserId(user_id));
}
export default User