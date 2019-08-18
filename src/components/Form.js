import React, { Component } from 'react';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';
import 'semantic-ui-css/semantic.min.css';
import moment from 'moment';

class Form extends Component {
	state = {
		date: '',
		time: '',
		location: '',
		description: '',
		disabled: false
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
  
  createAppointment = () => {
    let isCurrentDate = this.state.date.substring(0, 2) === moment().format('DD');
    console.log(this.state)
  }

	render() {
		return (
			<form className="ui form"
				onSubmit={(e) => {
					//this.setState({ disabled: true });
					// Stop de form from submitting
					e.preventDefault();
					// call the mutation
          //const res = await createVisitor();
           const res = this.createAppointment()
					// Router.push({
					// 	pathname: '/' + visitorType + 's'
					// });
        }}
        >
				<div className="title">New Appointment</div>
				<fieldset>
					<label htmlFor="expectedStartDate">
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

					<button disabled={this.state.disabled} className="ui positive button" type="submit">
						Save
					</button>
				</fieldset>
			</form>
		);
	}
}

export default Form;
