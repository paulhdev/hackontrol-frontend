import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './App'
import Home from './components/pages/home';
import CreateEvent from './components/pages/enterprise/createEvent'

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} render={props => (
					<Layout>
						<Home />
					</Layout>
				)} />

				<Route exact path={'/createEvent'} render={props => (
					<Layout>
						<CreateEvent />
					</Layout>
				)} />
			</Switch>
		</BrowserRouter>
	);
}
