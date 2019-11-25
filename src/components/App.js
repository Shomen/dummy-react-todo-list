import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskContextProvider from '../contexts/TaskContext';
import CreateTask from '../components/CreateTask';
import TaskList from '../components/TaskList';

function App(){	
		return (
			// Context Provider
			<TaskContextProvider>
				<CreateTask/>	
				<TaskList/>		
			</TaskContextProvider>
		);
}


export default App;
	