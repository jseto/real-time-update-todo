import * as React from "react";

import { Component } from "react";
import { Task } from "../models/task";

interface TaskDetailProps {
	task: Task;
	onDelete: ( item: Task ) => void;
}

export class TaskDetail extends Component< TaskDetailProps > {
	render() {
		const { task, onDelete } = { ...this.props };

		return(
			<div>
				<p>{ task.description }</p>
				<button onClick={ ()=>onDelete( task ) }>Delete</button>
			</div>
		)
	}
}
