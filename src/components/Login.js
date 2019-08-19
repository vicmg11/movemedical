import React, { Component } from 'react';
import Index from '../pages/index';
import StyledForm from './styles/Form';

class Login extends Component {
	state = {
		email: '',
		password: '',
		authenticated: false
	};

	saveToState = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	removeAuthentication = () => {
		this.setState({ authenticated: false });
	};

	render() {
		//Fake authentication passed all good
		if (this.state.authenticated) {
			return <Index handleAuth={this.removeAuthentication} />;
		}
		return (
			<StyledForm
				method="post"
				className="login-form ui form"
				onSubmit={(e) => {
					e.preventDefault();
					this.setState({ authenticated: true, email: '', password: '' });
				}}
			>
				<fieldset>
					<div className="title">Sign In</div>
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							value={this.state.email}
							onChange={this.saveToState}
						/>
					</label>

					<label htmlFor="password">
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
							value={this.state.password}
							onChange={this.saveToState}
						/>
					</label>
					<button className="ui blue button" type="submit">
						Login
					</button>
				</fieldset>
			</StyledForm>
		);
	}
}

export default Login;
