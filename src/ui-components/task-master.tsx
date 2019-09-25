import * as React from "react";

import { Component } from "react";
import { TaskDetail } from "./task-detail";
import { Task } from "../models/task";

interface TaskMasterProps {
	list: Task[];
}

export class TaskMaster extends Component<TaskMasterProps> {
	render() {
		return (
			<ul>
				{ this.props.list.map( item => {
					return (
						<li key={item.id}>
							<TaskDetail task={item}>
							</TaskDetail>
						</li>
					);
				}) }
			</ul>
		)
	}
}
