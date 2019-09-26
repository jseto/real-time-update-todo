import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { taskReducer } from "./reducers";

const emptyState = {
  tasks: []
};

const saga = createSagaMiddleware();

export function configureStore( initialState = emptyState ) {
	return createStore(
		taskReducer,
		initialState,
		applyMiddleware(saga)
	);
}
