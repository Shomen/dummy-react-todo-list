
const taskReducer = (state,action)=>{
	// Handle multiple actions as per action type
	switch(action.type){
		case'Add':			
			return [...state,action.task]
		case'Remove':			
			return state.filter(task => task.Id !== action.id)
		case'Update':
			return state.map(task => {				
				if (task.Id == action.task.Id) {					
				  return { ...task, Title : action.task.Title,Des : action.task.Des };
				} else {					
				  return task;
				}
			});
		case'Status':			
			return state.map(task => {				
				if (task.Id == action.id) {					
				  let status = (task.Status === 'Active') ? 'Completed' : 'Active';				  
				  return { ...task,  Status : status};
				} else {					
				  return task;
				}
			});
		default:
			return state
	}
}

export default taskReducer;