import React from 'react'
import './Main.css'
import Empty from './Empty'
import ChatWindow from './ChatWindow'

const Main = ({user, activeUserId}) => {
	//the two props passed into the main component from App.js are above
	//NOTE. ActiveUserId can be two values depending on if certain action has taken place
		const renderMainContent = () => {
			//These are the tw components that would be rendered to the DOM depending on the state of the ActiveUserId
			if (!activeUserId) {
				//If null
				//because the default state of activeUserId is null, this component is usually what is rendered first
				return <Empty user={user} activeUserId={activeUserId} />;
			} else {
				//if defined
				//on dispatching SET_ACTIVE_USER_ID action, triggered by clicking on a user, this component is rendered because activeUserId is no longer null
				return <ChatWindow activeUserId={activeUserId} />;
			}
		};

		//This component renders a function that has two posibilities, depending on if ActiveUserId is null or not
		return <main className="Main">{renderMainContent()}</main>
}

export default Main