import React from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import "./Empty.css";
import { signOutStart } from '../../actions/authActions';


const Empty = ({ user, currentUser }) => {
	const dispatch = useDispatch();

	const handleUserSignOut = () => {
		dispatch(signOutStart())
	}

	//The prop sent into this component is from Main.js
	//Like i said befor,User is just the main person chatting with the rest of the individuals
	//Take out all user props using destructuring
	const { name, profile_pic, status } = user;

	const { firstName, lastName } = currentUser;

	return (
		<div className="Empty">
			<button onClick={handleUserSignOut}>Logout</button>
			<h1 className="Empty__name">Welcome, {firstName} {lastName} </h1>
			<img src={profile_pic} alt={name} className="Empty__img" />
			<p className="Empty__status">
				<b>Status:</b> {status}
			</p>
			<button className="Empty__btn">Start a conversation</button>
			<p className="Empty__info">
				Search for someone to start chatting with or go to Contacts
				to see who
				is available
			</p>
		</div>
	);
};
export default Empty;