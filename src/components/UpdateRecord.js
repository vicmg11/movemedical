import React, { Component } from 'react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';
import StyledForm from './styles/Form';
import { isValidDate, isValidTime } from './library/Utils';

class Form extends Component {
	state = {
		date: this.props.appointment.date,
		time: this.props.appointment.time,
		location: this.props.appointment.location,
		description: this.props.appointment.description,
		dateErr: false,
		timeErr: false
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleChangeDt = (event, { name, value }) => {
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
	};

	updateAppointment = () => {
		if (isValidDate(this.state.date)) {
			this.setState({ date: this.props.appointment.date, dateErr: true });
			return;
		}
		if (isValidTime(this.state.date, this.state.time)) {
			this.setState({ time: this.props.appointment.time, timeErr: true });
			return;
		}
	  //Update records
		this.props.dataUpdate(this.state, this.props.index);
		this.props.onClose();
	};

	render() {
		return (
			<StyledForm
				className="ui form update"
				onSubmit={(e) => {
					// Stop de form from submitting
					e.preventDefault();
					this.updateAppointment();
				}}
			>
				{/* <div className="title">Update Appointment</div> */}
				<fieldset>
					<label htmlFor="date">
						{this.state.dateErr && (
							<span className="has-error">Appointment date cannot be in the past!</span>
						)}
						<DateInput
							name="date"
							placeholder="Appointment Date"
							required
							value={this.state.date}
							iconPosition="left"
							popupPosition="top right"
							minDate={new Date()}
							onChange={this.handleChangeDt}
						/>
					</label>

					<label htmlFor="time">
						{this.state.timeErr && (
							<span className="has-error">Appointment time cannot be in the past!</span>
						)}
						<TimeInput
							name="time"
							placeholder="Appointment Time"
							required
							timeFormat="AMPM"
							value={this.state.time}
							iconPosition="left"
							popupPosition="top right"
							onChange={this.handleChangeDt}
						/>
					</label>

					<label htmlFor="name">
						<input
							type="text"
							id="location"
							name="location"
							placeholder="Location"
							required
							value={this.state.location}
							onChange={this.handleChange}
						/>
					</label>

					<label htmlFor="name">
						<input
							type="text"
							id="description"
							name="description"
							placeholder="Description"
							required
							value={this.state.description}
							onChange={this.handleChange}
						/>
					</label>

					<button className="ui positive button" type="submit">
						Save
					</button>
				</fieldset>
			</StyledForm>
		);
	}
}

export default Form;
