import React, { Component } from 'react';
import Home from '../pages/index';

class Login extends Component {

	state = {
		email: '',
    password: '',
    toMenu: false
  };
  
	saveToState = (e) => {
		this.setState({ [e.target.name]: e.target.value });
  };
  
	render() {
    if (this.state.toMenu === true) {
      return (<Home />);
    }
		return (
			<form
				method="post"
				className="ui form"
				onSubmit={ (e) => {
          e.preventDefault();
					this.setState({ toMenu: true });
				}}
			>
				<fieldset>
					<div className="title">Sign In</div>
					<label htmlFor="email">
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.saveToState}
						/>
					</label>

					<label htmlFor="password">
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.saveToState}
						/>
					</label>
					<button className="ui blue button" type="submit">
						Login
					</button>
				</fieldset>
			</form>
		);
	}
}

export default Login;
