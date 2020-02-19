import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

import Auth from '../auth/auth';
import Home from './Home';



const App = () => {
	const firebase = useSelector(state => state.firebase, shallowEqual);

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth" component={Auth} />
			</Switch>
		</Router>
	)
}

export default App;
