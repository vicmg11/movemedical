import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
	font-size: 1.3rem !important;
	line-height: 1.5;
	font-weight: 600;
	label {
		display: block;
		margin-bottom: 1rem;
	}
	label.photo {
		padding-top: 15px;
		height: 135px;
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid black;
		&:focus {
			outline: 0;
			border-color: ${(props) => props.theme.red};
		}
	}
	input[type='file'] {
		display: none;
	}
	button,
	input[type='submit'] {
		font-size: 1.3rem !important;
		width: 100%;
		margin-top: 20px !important;
	}
	fieldset {
		border: 0;
		padding: 0;

		&[disabled] {
			opacity: 0.5;
		}
		&::before {
			height: 10px;
			content: '';
			display: block;
			background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
		}
		&[aria-busy='true']::before {
			background-size: 50% auto;
			animation: ${loading} 0.5s linear infinite;
		}
	}
  .alert {
    color: ${(props) => props.theme.red};
    text-align: center;
  }
	.title {
		text-align: center;
		color: #22568d;
		font-size: 2rem;
	}
  .forgotPass-btn {
    color: #22568D90;
	  text-align: right;
  }
`;

export default Form;
