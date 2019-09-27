import * as React from "react";
let TrashBin = require( "@fortawesome/fontawesome-free/svgs/regular/trash-alt.svg" );

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
			<div className="detail-view">
				<div className="detail-icon-panel">
					<div className="trash-bin-icon">
						<TrashBin data-icon="trash-alt" fill="#f99898" width="1em" height="1em"
							className="svg-inline icon-button"
							onClick={ ()=>onDelete( task ) }
						/>
					</div>
				</div>
				<div className="detail-content">
					<p>{ task.description }</p>
				</div>
			</div>
		)
	}
}
