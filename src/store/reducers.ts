import { StoreState, ADD_TASK, DELETE_TASK, TaskAction, RefreshAction, REFRESH_TASKS } from "./actionTypes";
import { emptyState } from "./store";

export function taskReducer( state = emptyState, action: TaskAction | RefreshAction ): StoreState {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.data]
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter( task => task.id !== action.data.id )
      };
		case REFRESH_TASKS:
			return {
				tasks: (<RefreshAction>action).tasks
			}
    default:
      return state;
  }
}
