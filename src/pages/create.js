import React from 'react';
import Form from '../components/CreateRecord';

function CreateRecord(props) {
	return (
		<div className="appt-form">
			<Form {...props}/>
		</div>
	);
}

export default CreateRecord;
