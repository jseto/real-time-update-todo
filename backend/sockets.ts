import io = require( 'socket.io' );
import { REFRESH_TASKS, TaskAction } from '../src/store/actionTypes';
import { Store } from 'redux';
import { addTask, deleteTask } from '../src/store/actions';
import { Task } from '../src/models/task';
import { Server as HttpServer } from 'http';

export class Sockets {
	constructor( server: HttpServer, store: Store ) {
		this._store = store;
		this._ioServer = io.listen( server );
		this._ioServer.sockets.on('connection', socket => this.setup( socket ) );
	}

	private setup( socket: io.Socket ) {
		console.log("Socket Connected");
		this.notifyClientsToRefresh();
		this.listenFor( addTask, socket );
		this.listenFor( deleteTask, socket );
	}

	private notifyClientsToRefresh() {
		this._ioServer.sockets.emit( REFRESH_TASKS, this._store.getState().tasks );
	}

	private listenFor( action: ( task?: Task ) => TaskAction, socket: io.Socket ) {
		socket.on( action().type, ( task: Task ) => {
			console.log( action(task), task );
			this._store.dispatch( action( task ) );
			this.notifyClientsToRefresh();
		});
	}

	private _ioServer: io.Server;
	private _store: Store;
}
