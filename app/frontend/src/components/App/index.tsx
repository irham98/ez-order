import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StallPage from '../../pages/StallsPage';
import MenuPage from '../../pages/MenuPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/menu/:name' component={MenuPage} />
				{/* Remove the demo route if your app is ready! */}
				<Route path='/' component={StallPage} />
			</Switch>
		</Router>
	);
}

export default hot(App);
