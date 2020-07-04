import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Auth from "./pages/auth/auth";
import Home from "./pages/home/Home";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth" component={Auth} />
			</Switch>
		</Router>
	);
};

export default App;
