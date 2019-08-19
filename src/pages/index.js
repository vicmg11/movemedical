import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

class Index extends React.Component {
	state = {
		appointmentsList: []
	};

	dataInsert = (data) => {
		//Save appointment on this array
    //Avoid operating the state directly safer use a copy of the array
		const newListArray = this.state.appointmentsList.slice();
		newListArray.push(data);
		this.setState({ appointmentsList: newListArray });
  };
  
  dataDelete = indexToDelete => {
    //Filter the array not inlcuding the deleted record
    const newListArray = this.state.appointmentsList.filter((_, index) => index !== indexToDelete);
    this.setState({ appointmentsList: newListArray });
  }

  dataUpdate = (data, index) => {
    //Update the record with the array index
    const newListArray = this.state.appointmentsList.slice();
    newListArray[index] = data;
    this.setState({ appointmentsList: newListArray });
  }

	render() {
		return (
			<div>
				<Header />
				<Nav
					handleAuth={this.props.handleAuth}
          dataInsert={this.dataInsert}
          dataDelete={this.dataDelete}
          dataUpdate={this.dataUpdate}
					appointmentsList={this.state.appointmentsList}
				/>
			</div>
		);
	}
}

export default Index;
