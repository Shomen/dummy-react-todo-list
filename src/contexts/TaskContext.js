import React,{createContext,useReducer,useEffect} from 'react';
import taskReducer from '../reducers/taskReducer'
export const TaskContext = createContext();

const TaskContextProvider = function  (props) {
	// Intial value
	const defaultValue=[{Id:'ts001',Title:'Excepteur sint occaecat cupidatat',Des:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',Status:'Active'},{Id:'ts002',Title:'Ut enim ad minima veniam',Des:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',Status:'Active'},{Id:'ts003',Title:'At vero eos et accusamus',Des:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est',Status:'Active'},{Id:'ts004',Title:'ut aut reiciendis',Des:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',Status:'Active'}];
	const [tasks, dispatch] = useReducer(taskReducer,defaultValue,()=>{
		const localData = localStorage.getItem('tasks');
		return localData ? JSON.parse(localData) : defaultValue;
	}); // Using Reducer hook to handle multiple actions.
	
	// This hook runs every time if any data update. 
	useEffect(()=>{
		localStorage.setItem('tasks',JSON.stringify(tasks))
	},[tasks]);
	
	return (
		<TaskContext.Provider value={{tasks,dispatch}}>
			 {props.children}
		</TaskContext.Provider>
    );
}

export default TaskContextProvider;

