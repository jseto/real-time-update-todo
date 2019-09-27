import { ADD_TASK, DELETE_TASK, TaskAction, RefreshAction, REFRESH_TASKS } from "./actionTypes";
import { Task } from "../models/task";

export function addTask( task: Task ): TaskAction {
  return {
    type: ADD_TASK,
    data: task
  };
}

export function deleteTask( task: Task ): TaskAction {
  return {
    type: DELETE_TASK,
    data: task
  };
}

export function refreshTasks( tasks: Task[] ): RefreshAction {
	return {
		type: REFRESH_TASKS,
		data: { id:'', description:'', user:'' },
		tasks: tasks
	}
}
