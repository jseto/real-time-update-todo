import { Task } from "../models/task";

export interface StoreState {
  tasks: Task[];
}

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  meta: {
    taskId: string;
  };
}

export type TaskActionTypes = AddTaskAction | DeleteTaskAction;
