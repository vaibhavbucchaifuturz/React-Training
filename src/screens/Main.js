import React, {Component} from 'react';
import { Header } from './../components';
import { StudentList, DemoFetch } from './';
import {data} from '../data/students'
class Main extends Component {
	render() {
		return( <>
			<Header />
			<StudentList data={data} />
			<DemoFetch />
			</>
		);
	}
}

export {Main};