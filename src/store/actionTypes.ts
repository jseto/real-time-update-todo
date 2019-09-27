import { Task } from "../models/task";

export interface StoreState {
  tasks: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export interface TaskAction {
	type: string;
	data: Task;
}
