import styled from 'styled-components';

const Form = styled.form`
	font-size: 1.3rem !important;
	line-height: 1.5;
	font-weight: 600;
	&.create {
		width: 400px;
	}
	label {
		display: block;
		margin-bottom: 1rem;
	}
	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid black;
	}
	button,
	input[type='submit'] {
		font-size: 1.3rem !important;
		width: 100%;
		margin-top: 20px !important;
	}
	.ui.positive.button {
		margin-bottom: 20px;
	}
	fieldset {
		border: 0;
		padding: 0;

		&::before {
			height: 10px;
			content: '';
			display: block;
			background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
		}
	}
	.has-error {
		color: red;
	}
	.title,
	.title-app {
		text-align: center;
		color: #22568d;
		font-size: 2rem;
	}
	.title-app {
		margin-top: 40px;
	}
`;

export default Form;
