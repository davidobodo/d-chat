import React from 'react'
import './Header.css'
import store from '../../store/store'
import { unsetActiveUser } from '../../actions/action'

const Header = ({ activeChat, activeUserId }) => {
	const { firstName, lastName } = activeChat[0];

	return (
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
	store.dispatch(unsetActiveUser(activeUserId))
}

export default Header