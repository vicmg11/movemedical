import React from 'react';
import Home from '../components/Home';
import CreateRecord from '../pages/create';
import Report from '../pages/report';
import Login from '../pages/login';

import { Route, Link, Switch } from 'react-router-dom';

const Nav = () => (
	<React.Fragment>
		<ul className="menu">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/create">New Appointment</Link>
			</li>
      <li>
				<Link to="/report">Report</Link>
			</li>
      <li>
				<Link to="/login">Logout</Link>
			</li>
		</ul>
		<div className="App-intro">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/create" component={CreateRecord} />
        <Route path="/report" component={Report} />
        <Route path="/login" component={Login} />
			</Switch>
		</div>
	</React.Fragment>
);

export default Nav;
