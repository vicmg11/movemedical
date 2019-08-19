import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import Form from '../UpdateRecord';

class ModalUpdate extends Component {
	state = { open: false };

	close = () => this.setState({ open: false });

	componentDidMount() {
		this.props.onRef(this);
	}
	method() {
		this.setState({ open: true });
	}

	render() {
		const { open } = this.state;

		return (
			<div>
				<Modal size="tiny" open={open} onClose={this.close}>
					<Modal.Header>Update Appointment</Modal.Header>
					<Modal.Content>
						<Form {...this.props} onClose={this.close}/>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

export default ModalUpdate;
