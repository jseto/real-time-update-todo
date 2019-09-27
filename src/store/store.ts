import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { taskReducer } from "./reducers";
import rootSaga from "./sagas";

export const emptyState = {
  tasks: []
};

export function configureStore( initialState = emptyState ) {
	const saga = createSagaMiddleware();

	const store = createStore(
		taskReducer,
		initialState,
		applyMiddleware(saga)
	);

	saga.run( rootSaga )

	return store;
}
