import express from 'express';
import { Task } from '../src/models/task';
import { DataStreamer } from './data-streamer';
import { Sockets } from './sockets';
import { createStore } from 'redux';
import { taskReducer } from '../src/store/reducers';
import { StoreState } from '../src/store/actionTypes';

const app: express.Application = express();
app.use( express.json() );
app.use( express.static( 'dist/frontend' ) )

app.use( ( _request, response, next ) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const streamer = new DataStreamer<Task[]>( 'out/data.dat' );
const data: StoreState = { tasks: streamer.readData() || [] };
console.log( 'data', data )
let store: any = createStore(
	taskReducer,
	data
);

const PORT = process.env.PORT || 3000;

const server = app.listen( PORT, () => {
  console.info('Socket server listening on port ' + PORT );

	new Sockets( server, store );
});
