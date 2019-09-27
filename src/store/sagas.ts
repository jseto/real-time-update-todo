import io = require( 'socket.io-client' );
import { fork, call, take, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { refreshTasks } from "./actions";
import { Task } from "../models/task";
import { TaskAction } from "./actionTypes";

const host = 'http://localhost:3000';

export default function* rootSaga() {
   yield fork(flow);
}

function connect() {
	const socket = io( host );
	return new Promise(resolve => {
		socket.on( 'connect', () => resolve( socket ) );
	});
}

function createSocketChannel( socket: SocketIOClient.Socket ) {
	return eventChannel< TaskAction >( emit => {

	  const update = ( tasks: Task[] ) => {
			console.log( 'update', tasks );
			emit( refreshTasks( tasks ) );
		}

		socket.on('REFRESH_TASKS', update);

	  return () => socket.off('REFRESH_TASKS', update);
	});
}

function* read( socket: SocketIOClient.Socket ) {
	const socketChannel = yield call( createSocketChannel, socket );

	while (true) {
		const action = yield take( socketChannel );
		console.log( action.type )
		yield put( action );
	}
};


function notifyActionToServer( action: TaskAction, socket: SocketIOClient.Socket ) {
	socket.emit( action.type, action.data )
}

function* write( socket: SocketIOClient.Socket ) {
	const anyAction = '*';

	while( true ) {
    notifyActionToServer( yield take( anyAction ), socket );
	}
}

export function* flow() {
  const socket = yield call( connect )
  yield fork( read, socket )
  yield fork( write, socket )
}
