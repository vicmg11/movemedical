import React from 'react';
import Home from '../components/Home';
import CreateRecord from '../pages/create';
import Report from '../pages/report';
import Signout from '../components/Logout';

import { Route, Link, Switch } from 'react-router-dom';
const Nav = (props) => (
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
		</ul>
    <Signout handleAuth={props.handleAuth} />

		<div className="App-intro">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/create" render={(routeProps) => <CreateRecord {...routeProps} {...props} />} />
				<Route path="/report" render={(routeProps) => <Report {...routeProps} {...props} />} />
      </Switch>
		</div>
	</React.Fragment>
);

export default Nav;
