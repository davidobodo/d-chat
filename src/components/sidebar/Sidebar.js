import React from 'react'
import './Sidebar.css'
import User from '../user/User'

const Sidebar = (props) => {
	const { contacts } = props
	return (

		<aside className="Sidebar">
			{contacts && contacts.map(contact => <User user={contact} key={contact.user_id} />
			)}
		</aside>
	)
}

export default Sidebar