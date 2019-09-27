import { ADD_TASK, DELETE_TASK, TaskAction } from "./actionTypes";
import { Task } from "../models/task";

export function addTask( task: Task): TaskAction {
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
