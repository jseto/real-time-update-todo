import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { taskReducer } from "./reducers";
import rootSaga from "./sagas";

export const emptyState = {
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

// saga.run( rootSaga )
