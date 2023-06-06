import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';



  // const React = require('react'); 
// const ReactDOM = require('react-dom'); 
// const client = require('./client'); 
class App extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {employees: []};
	// }

	// componentDidMount() { 
	// 	client({method: 'GET', path: '/api/employees'}).done(response => {
	// 		this.setState({employees: response.entity._embedded.employees});
	// 	});
	// }

	render() { 
	
			

		return (
			<table>
				<tbody>
					<tr>
          <td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>

					</tr>
					
				</tbody>
			</table>
		)
	}
}


export default App;
