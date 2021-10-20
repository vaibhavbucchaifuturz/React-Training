import React, {Component} from 'react';

class StudentData extends Component{
	constructor(props){
		super(props);
		const {index, name, college, skills, dob, qualification} = this.props;
		this.state = {
			index,
			name,
			college,
			skills,
			dob,
			qualification
		}
	}

	render(){
		return(
			<tr key={this.state.index} >
				<td>{this.state.index+1}</td>
				<td>{this.state.name}</td>
				<td>{this.state.college}</td>
				<td>{this.state.skills.join(', ')}</td>
				<td>{ this.state.dob }</td>
				<td>{ this.state.qualification }</td>
			</tr>
		);
	}
}

export {StudentData};