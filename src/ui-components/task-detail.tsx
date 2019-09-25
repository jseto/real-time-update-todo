import * as React from "react";

import { Component } from "react";
import { Task } from "../models/task";

interface TaskDetailProps {
	task: Task;
}

export class TaskDetail extends Component< TaskDetailProps > {
	render() {
		return(
			<div>
				<p>{this.props.task.description}</p>
			</div>
		)
	}
}
