import React from 'react'
import './Sidebar.css'
import User from '../user/User'

const Sidebar = (props) => {
	const { contacts } = props
	return (

		<aside className="Sidebar">
			{contacts && contacts.map((contact, i) => <User user={contact} key={i} />
			)}
		</aside>
	)
}

export default Sidebar