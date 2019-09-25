import * as React from "react";

import { Component } from "react";
import { TaskDetail } from "./task-detail";
import { Task } from "../models/task";

interface TaskMasterProps {
	list: Task[];
	onDelete: ( item: Task ) => void;
}

export class TaskMaster extends Component<TaskMasterProps> {
	render() {
		const { list, onDelete } = { ...this.props }

		return (
			<ul>
				{ list && list.map( item => {
					return (
						<li key={item.id}>
							<TaskDetail
								task={item}
								onDelete={ ()=>onDelete( item ) }
							/>
						</li>
					);
				}) }
			</ul>
		)
	}
}
