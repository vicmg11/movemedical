import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
	.ui.message {
		margin: 50px 20px !important;
		color: #2c3e50;
	}
`;

const Home = (props) => (
	<Center>
		<div className="ui huge floating message">
			<p>Home Page for Appoitment System</p>
		</div>
	</Center>
);

export default Home;
