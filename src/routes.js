import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './App'
import Home from './components/pages/home'

// HEADS
import EnterpriseHead from './components/pages/enterprise/head'
import UserHead from './components/pages/user/head'

// BODY
import CreateEvent from './components/pages/enterprise/createEvent'
import UserControl from './components/pages/user/account/control'
import AboutEvent from './components/pages/enterprise/aboutEvent';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={props => (
					<Layout>
						<Home />
					</Layout>
				)} />

				<Route exact path="/createEvent" render={props => (
					<Layout>
						<EnterpriseHead />
						<CreateEvent />
					</Layout>
				)} />

				<Route exact path="/user" render={props => (
					<Layout>
						<UserHead />
						<UserControl />
					</Layout>
				)} />

				<Route
					exact
					path="/aboutEvent/:id"
					render={(params) => (
						<Layout>
							<AboutEvent {...params} />
						</Layout>
					)}
				/>
			</Switch>
		</BrowserRouter>
	);
}
