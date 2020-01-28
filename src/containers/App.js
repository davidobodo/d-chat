import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import Home from './Home';



const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={SignUp} />
		</Router>
	)
}

export default App;
