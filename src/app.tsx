import * as React from "react";

import { Component } from "react";
import { TaskMaster } from "./ui-components/task-master";
import { Task } from "./models/task";

interface AppState {
	taskList: Task[];
}

export class App extends Component<{}, AppState> {
	constructor( props: {} ) {
		super( props );

		this.state = {
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

  render() {
    return (
			<TaskMaster
				list={ this.state.taskList }
				onDelete={ item =>  this.deleteItem( item ) }
			/>
		)
  }

}
