import React from 'react'
import './Header.css'
import store from '../../store/store'
import { unsetActiveUser } from '../../actions/action'


//take in props that were sent from parentelement using destructuring since we want to give them same variable names
const Header = ({ activeChat, activeUserId }) => {
	const { firstName, lastName } = activeChat[0];
	return (

		//on clicking button dispatch action to set user id back to null so that we can go back to home page
		//Pass in the credentials for display in the header
		//remember bind is the syntax for passing parameters into the click function and null must always be its initial parameter
		<header className="Header">
			<button className="Header__button" onClick={handleClick.bind(null, activeUserId)}>
				Back
			</button>
			<h1 className="Header__name">{firstName} {lastName}</h1>
			{/* <p className="Header__status">{status}</p> */}
		</header>
	)
}

const handleClick = (activeUserId) => {
	//this goes to the actions directory
	store.dispatch(unsetActiveUser(activeUserId))
}

export default Header