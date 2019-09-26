import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { taskReducer } from "./reducers";

const initialState = {
  tasks: []
};

const saga = createSagaMiddleware();

export function configureStore() {
	return createStore(
		taskReducer,
		initialState,
		applyMiddleware(saga)
	);
}
