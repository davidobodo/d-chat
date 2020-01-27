import React from "react";
import "./Empty.css";


const Empty = ({ user }) => {

	//The prop sent into this component is from Main.js
	//Like i said befor,User is just the main person chatting with the rest of the individuals
	//Take out all user props using destructuring
	const { name, profile_pic, status } = user;

	//Use javascript string.split method to grab first word of name and store in a variable
	const first_name = name.split(" ")[0];
	return (
		//output properties where needed
		<div className="Empty">
			<h1 className="Empty__name">Welcome, {first_name} </h1>
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