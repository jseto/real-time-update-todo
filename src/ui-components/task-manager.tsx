import * as React from "react";

import { Component, ChangeEvent } from "react";
import { TaskMaster } from "./task-master";
import { StoreState } from "../store/actionTypes";
import { addTask, deleteTask } from "../store/actions";
import { connect } from "react-redux";
import { Task } from "../models/task";

interface TaskManagerProps {
	addTask: typeof addTask;
	deleteTask: typeof deleteTask;
	tasks: Task[];
	user: string;
}

interface TaskManagerState {
	taskName: string;
}

class TaskManager extends Component<TaskManagerProps, TaskManagerState> {
	constructor( props: TaskManagerProps ) {
		super( props );

		this.state = {
			taskName: '',
		};
	}

	deleteItem( task: Task ) {
		this.props.deleteTask( task );
	}

	addTask() {
		this.props.addTask({
			user: this.props.user,
			id: String(Date.now()),
			description: this.state.taskName
		});
	}

	taskNameInputChange( event: ChangeEvent ) {
		this.setState({
			taskName: event.target['value']
		})
	}

  render() {
    return (
			<div className="app-panel">
				<div className="inline-middle half-width">
					<input
						placeholder="Enter new task"
						value={ this.state.taskName }
						onChange={ event => this.taskNameInputChange( event ) }
					/>
				</div>
				<div  className="inline-middle half-width align-right bottom-margin">
					<button
						onClick={ () => this.addTask() }>
							Add
					</button>
				</div>
				<TaskMaster
					list={ this.props.tasks.filter( task => task.user === this.props.user ) }
					onDelete={ (item: Task ) =>  this.deleteItem( item ) }
				/>
			</div>
		)
  }

}

function mapStateToProps( state: StoreState ) {
	return { tasks: state.tasks };
}

export default connect( mapStateToProps, {
	addTask,
	deleteTask
})( TaskManager );
