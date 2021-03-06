import React, { Component } from 'react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';
import StyledForm from './styles/Form';
import { isValidDate, isValidTime } from './library/Utils';

class Form extends Component {
	state = {
		date: '',
		time: '',
		location: '',
		description: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleChangeDt = (event, { name, value }) => {
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value, dateErr: false, timeErr: false });
		}
	};

	createAppointment = () => {
		//validate date and time fields are not in the past
		if (isValidDate(this.state.date)) {
			alert('Appointment date cannot be in the past/or bad format!');
		} else if (isValidTime(this.state.date, this.state.time)) {
			alert('Appointment time cannot be in the past/or bad format!');
			return;
		} else {
			this.props.dataInsert(this.state);
			//initialize state after adding the record
			this.setState({
				date: '',
				time: '',
				location: '',
				description: ''
			});
		}
	};

	render() {
		return (
			<StyledForm
				className="ui form create"
				onSubmit={(e) => {
					e.preventDefault(); // Stop form from submitting
					this.createAppointment();
				}}
			>
				<div className="title-app">New Appointment</div>
				<fieldset>
					<label htmlFor="date">
						<DateInput
							name="date"
							placeholder="Appointment Date"
							value={this.state.date}
							required
							iconPosition="left"
							popupPosition="top right"
							minDate={new Date()}
							onChange={this.handleChangeDt}
						/>
					</label>

					<label htmlFor="time">
						<TimeInput
							name="time"
							placeholder="Appointment Time"
							timeFormat="AMPM"
							value={this.state.time}
							required
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
						Add
					</button>
				</fieldset>
			</StyledForm>
		);
	}
}

export default Form;
