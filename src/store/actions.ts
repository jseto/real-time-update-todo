import { ADD_TASK, DELETE_TASK } from "./actionTypes";
import { Task } from "../models/task";

export function addTask( task: Task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function deleteTask( taskId: string ) {
  return {
    type: DELETE_TASK,
    meta: {
      taskId
    }
  };
}
