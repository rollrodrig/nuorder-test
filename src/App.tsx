import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { View } from './pages/view';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/view/:id">
					<View />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
