import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Auth from '../auth/auth';
import Home from './Home';



const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/auth" component={Auth} />
		</Router>
	)
}

export default App;
