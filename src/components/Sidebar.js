import React from 'react'
import './Sidebar.css'
import User from '../containers/User'

const Sidebar = ({contacts}) => {
	return (
		//map through the contacts array that has been passed down as props
		//send each of the contacts into a component called user(bad name choice since i am already using this name for the main guy)
		//use each of the contacts user_id as key so that react can recognize each user individually 
			<aside className="Sidebar">
				{contacts.map(contact => <User user={contact} key={contact.user_id}/>
				)}
			</aside>
	)
}

export default Sidebar