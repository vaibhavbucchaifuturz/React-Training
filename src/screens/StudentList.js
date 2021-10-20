import React, {Component} from 'react';
import {StudentData} from './';
class StudentList extends Component{

	constructor(props){
		super(props)
		this.state = {
			students: this.props.data
		}
	}

	render(){
		return( 
			<>
				<table>
					<thead>
						<th>ID</th>
						<th>Name</th>
						<th>College</th>
						<th>Skills</th>
						<th>DOB</th>
						<th>Qualification</th>
					</thead>
					<tbody>
						{
							this.state.students.map((student ,index) => (
								<StudentData index={index} name={student.name} college={student.college} skills={student.skills} dob={student.dob} qualification={student.qualification} />
							))
						}
					</tbody>
				</table>		
			</>
		);
	}
}

export {StudentList};