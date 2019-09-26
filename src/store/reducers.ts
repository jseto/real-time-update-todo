import { StoreState, TaskActionTypes, ADD_TASK, DELETE_TASK } from "./actionTypes";

const initialState: StoreState = {
  tasks: []
};

export function taskReducer( state = initialState, action: TaskActionTypes ): StoreState {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter(
          task => task.id !== action.meta.taskId
        )
      };
    default:
      return state;
  }
}
