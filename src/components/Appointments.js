import React, { Component } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import Appointment from './Appointment';

const Center = styled.div`
	.ui.message {
		margin: 50px 20px !important;
		color: #2c3e50;
	}
`;

const AppointmentList = styled.div`
	margin: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.content {
		text-align: center;
	}
	.meta {
		font-size: 1.2em;
	}
	.hr-line {
		width: 40px;
		padding-top: 10px;
		border-top: 1px solid #cccc;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.date {
		font-size: 1.4rem;
	}
	.title {
		text-align: center;
		margin-top: 40px;
		color: #22568d;
		font-size: 2rem;
	}
`;

class Appointments extends Component {
	render() {
		const { appointmentsList, dataDelete, dataUpdate } = this.props;
		if (appointmentsList.length === 0) {
			return (
				<Center>
					<div className="ui huge floating message">
						<p>There are no existing Appointment, add a new one first.</p>
					</div>
				</Center>
			);
		}
		return (
			<Center>
				<AppointmentList>
					<div className="title">Appointments</div>
					<div className="ui unstackable items">
						{appointmentsList.map((appointment, index) => (
							<Appointment
								appointment={appointment}
								index={index}
								dataDelete={dataDelete}
								dataUpdate={dataUpdate}
								key={index}
							/>
						))}
					</div>
				</AppointmentList>
			</Center>
		);
	}
}

export default Appointments;
