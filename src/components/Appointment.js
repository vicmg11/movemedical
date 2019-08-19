import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Button, Card } from 'semantic-ui-react';
import ModalUpdate from './library/Model';

export default class Appointment extends Component {
	static propTypes = {
		appointment: PropTypes.object.isRequired,
		index: PropTypes.number.isRequired,
		dataDelete: PropTypes.func.isRequired
	};

	updateAppt = () => {
    //Open Model
    this.child.method();
	};

	deleteAppt = () => {
		//Delete index from Array
		this.props.dataDelete(this.props.index);
	};

	render() {
		const { appointment } = this.props;
		return (
			<React.Fragment>
				<ModalUpdate onRef={ref => (this.child = ref)} {...this.props} />
				<Card.Group>
					<Card>
						<Card.Content>
							<Card.Header>{appointment.description}</Card.Header>
							<Card.Meta>{appointment.location}</Card.Meta>
							<Card.Description>
								<div className="hr-line" />
								<div>@ {appointment.time} on</div>
								<div className="date">{appointment.date}</div>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className="ui two buttons">
								<Button basic color="green" onClick={this.updateAppt}>
									Edit
								</Button>
								<Button basic color="red" onClick={this.deleteAppt}>
									Delete
								</Button>
							</div>
						</Card.Content>
					</Card>
				</Card.Group>
			</React.Fragment>
		);
	}
}
