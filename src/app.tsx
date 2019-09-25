import * as React from "react";

import { Component, ChangeEvent } from "react";
import { TaskMaster } from "./ui-components/task-master";
import { Task } from "./models/task";

interface AppState {
	taskList: Task[];
	taskName: string;
}

export class App extends Component<{}, AppState> {
	constructor( props: {} ) {
		super( props );

		this.state = {
			taskName: '',
			taskList: [
				{ id:'1', description: 'Task 1' },
				{ id:'2', description: 'Task 2' },
				{ id:'3', description: 'Task 3' },
				{ id:'4', description: 'Task 4' },
				{ id:'5', description: 'Task 5' }
			]
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
					onDelete={ item =>  this.deleteItem( item ) }
				/>
			</div>
		)
  }

}
