import * as React from "react";

import { Component } from "react";
import { TaskMaster } from "./ui-components/task-master";
import { Task } from "./models/task";

export class App extends Component {

  render() {
		const list: Task[] = [
			{ id:'1', description: 'Task 1' },
			{ id:'2', description: 'Task 2' },
			{ id:'3', description: 'Task 3' },
			{ id:'4', description: 'Task 4' },
			{ id:'5', description: 'Task 5' }
		]

    return <TaskMaster list={ list } />;
  }
}
