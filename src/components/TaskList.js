import React,{useContext} from 'react';
import {TaskContext} from '../contexts/TaskContext';

const TaskList = () => {
	const {tasks,dispatch} = useContext(TaskContext); // Accessing context object using hook
	
	// Custom function to View details
	const viewTask=(id)=>{
							document.getElementsByClassName('task-list')[0].style.cssText='display:none;';
							document.getElementsByClassName('task-list')[1].style.cssText='display:none;';
							document.getElementById('dt-list').style.cssText='display:block;';	
							
							let objIndex = tasks.findIndex((obj => obj.Id === id));	
							let details = document.getElementById('tsk-details');	
							details.innerHTML = `<h4 class="text-info stt">Status: ${tasks[objIndex].Status}</h4><h1>${tasks[objIndex].Title}</h1><p>${tasks[objIndex].Des}</p>`;
						}
	let taskList='';
	if(tasks){
		taskList = tasks.map( (task)=>
			<li key={task.Id} className={task.Id+" trans "+task.Status}>
				<span className="li-in1 text-center">
					{getTrimedText(task.Title,20)}
				</span>
				<span className="li-in2 text-center">
					{getTrimedText(task.Des,30)}
				</span>
				<span className="li-in3 text-center" id={task.Id}>
					<i onClick={() => viewTask(task.Id)} className="fa fa-eye" aria-hidden="true"></i>
					<i onClick={() => editTask(task.Id)} className="fa fa-pencil-square-o"></i>
					<i onClick={() => removeTask(task.Id)} className="fa fa-trash" aria-hidden="true"></i>
					<i onClick={() => completeTask(task.Id)} className="fa fa-check-square"></i>
				</span>											
			</li>
		);
	}
	
	// Custom function to Delete task
	const removeTask=(id)=>{
							dispatch({type:'Remove',id}); // Dispatch function to pass Action
						}
						
						const editTask=(id)=>{
							const title = document.getElementById('tsk-title');
							const des = document.getElementById('tsk-des');
							const tskId = document.getElementById('tsk-id');
							let objIndex = tasks.findIndex((obj => obj.Id === id));								
							title.value =tasks[objIndex].Title;
							des.value = tasks[objIndex].Des;
							tskId.value = id;
							document.getElementById('btn-add').style.cssText='display:none;';
							document.getElementById('btn-update').style.cssText='display:inline-block;';							
						}
						
	// Toggle Task Status
	const completeTask=(id)=>{
							dispatch({type:'Status',id}); // Dispatch function to pass Action
						}
						
	// Return back to Homepage
	const goBack=()=>{
							document.getElementsByClassName('task-list')[0].style.cssText='display:block;';
							document.getElementsByClassName('task-list')[1].style.cssText='display:block;';
							document.getElementById('dt-list').style.cssText='display:none;';	
						}																		
						
						let sdList='';
						if(tasks){
							sdList = tasks.map( (task)=>
										<li key={task.Id} className={task.Id}>
											<span className="text-center" onClick={() => viewTask(task.Id)}>
												{task.Title}
											</span>									
										</li>
									);
						}
	
	return(
	<>
		<div className="task-list mx-auto w-75 p-4 trans">
			<ul className="trans w-100 text-center">
				{taskList}
			</ul>
		</div>
		<div id="dt-list" className="trans mx-auto w-100 p-4">
			<span className="btn btn-info go-back" onClick={goBack}>Back</span>
			<div class="cboth"></div>
			<ul className="side text-left trans nav">
				{sdList}									
			</ul>
			<div id="tsk-details" className="trans">
					.......
			</div>
			<div class="cboth"></div>
		</div>
	</>
	);
}

// Custom function Trim text as per given value

function getTrimedText(txt,chars){
	if(txt.length > chars){
		return txt.substring(0,chars)+'...';
	}else{
		return txt;
	}
}

export default TaskList;