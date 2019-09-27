import { Task } from "../models/task";

export interface StoreState {
  tasks: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const REFRESH_TASKS = "REFRESH_TASKS";

export interface TaskAction {
	type: string;
	data: Task;
}

export interface RefreshAction extends TaskAction {
	tasks: Task[];
}
