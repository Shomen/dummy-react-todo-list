import React,{useContext} from 'react';
import {TaskContext} from '../contexts/TaskContext';

const CreateTask = () => {
	const {tasks,dispatch} = useContext(TaskContext); // Accessing context object using hook
	
	// Custom function Create list
	const createList=()=>{
							const title = document.getElementById('tsk-title');
							const des = document.getElementById('tsk-des');
							const Id = Math.ceil(Math.random() * new Date().getUTCMilliseconds());
							
							if(title.value && des.value){
								const newTask = {Id:Id,Title:title.value,Des:des.value,Status:'Active'};
								dispatch({type:'Add',task:newTask}); // Dispatch function to pass Action
								title.value ='';
								des.value = '';
							}else{
								alert('Please Enter Data!');
							}
						}
	
	// Custom function Update list
	const updateList=()=>{							
							const title = document.getElementById('tsk-title');
							const des = document.getElementById('tsk-des');
							const tskId = document.getElementById('tsk-id');
							
							dispatch({type:'Update',task:{Id:tskId.value,Title:title.value,Des:des.value}}); // Dispatch function to pass Action
							title.value ='';
							des.value = '';
							document.getElementById('btn-add').style.cssText='display:inline-block;';
							document.getElementById('btn-update').style.cssText='display:none;';	
						}

	return(
	<div className="task-list mx-auto w-75 p-4 trans">				
		<ul className="w-100 text-center">
			<li className="dt-in text-center">
				<span className="li-in1">
					<input type="text" name="tsk-title" id="tsk-title"/>
				</span>
				<span className="li-in2">
					<input type="text" name="tsk-des" id="tsk-des"/>
				</span>
				<span className="li-in3">
					<button id="btn-add" className="btn-info" onClick={createList}>Add</button>
					<input type="hidden" id="tsk-id"/>
					<button id="btn-update" className="btn-info" onClick={updateList}>Update</button>
				</span>
			</li>
		</ul>	
		<div class="cboth"></div>
	</div>
	);
}

export default CreateTask;