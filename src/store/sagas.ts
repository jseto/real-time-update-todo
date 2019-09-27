import { fork, call, take, put } from "redux-saga/effects";
import { host } from "..";
import { eventChannel } from "redux-saga";
import { addTask } from "./actions";
import { Task } from "../models/task";
import { TaskAction } from "./actionTypes";

export default function* rootSaga() {
   yield fork(flow);
}

function connect() {
	const socket = io( host );
	return new Promise(resolve => {
		socket.on( 'connect', () => resolve( socket ));
	});
}

function createSocketChannel( socket: SocketIOClient.Socket ) {
	return eventChannel< TaskAction >( emit => {

	  const update = ( task: Task ) => emit( addTask( task ) );
	  socket.on('addTask', update);

	  return () => socket.off('addTask', update);
	});
}

function* read( socket: SocketIOClient.Socket ) {
	const socketChannel = yield call( createSocketChannel, socket );

	while (true) {
		const action = yield take( socketChannel );
		yield put( action );
	}
};

function* write( socket: SocketIOClient.Socket ) {
	while( true ) {
    const action: TaskAction = yield take( '*' );
    socket.emit( action.type, action.data )
	}
}

export function* flow() {
  // yield take(GET_TODOS)
  const socket = yield call( connect )
  yield fork( read, socket )
  yield fork( write, socket )
}
