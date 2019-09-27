// import express = require( 'express' );
import express from 'express';
import io from 'socket.io';
import { Task } from '../src/models/task';
import { ADD_TASK, DELETE_TASK, REFRESH_TASKS } from '../src/store/actionTypes';

// Create a new express application instance
const app: express.Application = express();

app.use( express.json() );

app.use( express.static( 'dist/frontend' ) )

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.info('Rest server listening on port ' + PORT );
});

const ioServer = io.listen( server );

app.use( ( _request, response, next ) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const tasks: Task[] = [];

ioServer.sockets.on( 'connection', socket => {
	console.log("Socket Connected");
	ioServer.sockets. emit( REFRESH_TASKS, 'tasks' );

	socket.on( ADD_TASK, ( task: Task ) => {
		ioServer.sockets.emit( REFRESH_TASKS, tasks );
		console.log( 'Add task: ', task );
	});

	socket.on( DELETE_TASK, ( task: Task ) =>{
		ioServer.sockets.emit( REFRESH_TASKS, tasks );
		console.log( 'Delete task', task );
	})

})
