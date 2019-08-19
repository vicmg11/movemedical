import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';

const Logout = styled.div`
	font-size: 1rem;
	margin-top: 14px;
	padding: 0px 12px;
	cursor: pointer;
	color: #2c3e50;
	position: fixed;
	right: 4px;
	top: 4px;
`;

const Signout = (props) => (
	<Logout className="logout" onClick={() => props.handleAuth(false)}>
		<Icon name="sign out alternate" />
	</Logout>
);

export default Signout;
