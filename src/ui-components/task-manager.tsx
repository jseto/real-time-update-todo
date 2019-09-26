import * as React from "react";

import { Component, ChangeEvent } from "react";
import { TaskMaster } from "./task-master";
import { Task } from "./../models/task";

interface TaskManagerProps {
	initialData?: Task[];
}

interface TaskManagerState {
	taskList: Task[];
	taskName: string;
}

export class TaskManager extends Component<TaskManagerProps, TaskManagerState> {
	constructor( props: TaskManagerProps ) {
		super( props );

		this.state = {
			taskName: '',
			taskList: props.initialData || []
		};
	}

	deleteItem( item: Task ) {
		this.setState( prevState => {
			return {
				taskList: prevState.taskList.filter( i => item !== i )
			}
		});
	}

	addTask() {
		this.setState( prevState => {
			return {
				taskList: [ ...prevState.taskList, {
					id: String(Date.now()),
					description: prevState.taskName
				}]
			}
		});
	}

	taskNameInputChange( event: ChangeEvent ) {
		this.setState({
			taskName: event.target['value']
		})
	}

  render() {
    return (
			<div>
				<input
					placeholder="Enter new task"
					value={ this.state.taskName }
					onChange={ event => this.taskNameInputChange( event ) }
				/>

				<button
					onClick={ () => this.addTask() }>
						Add
				</button>

				<TaskMaster
					list={ this.state.taskList }
					onDelete={ (item: Task ) =>  this.deleteItem( item ) }
				/>
			</div>
		)
  }

}
