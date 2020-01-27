import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from '../store/store';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import Home from './Home';



const App = () => {
	return (
		<Provider store={store}>
			{/* <ProvideAuth> */}
			<Router>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
			</Router>
			{/* </ProvideAuth> */}
		</Provider>
	)
}

export default App;
