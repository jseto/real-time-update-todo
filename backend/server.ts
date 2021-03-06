import express = require( 'express' );
import { Task } from '../src/models/task';
import { DataStreamer } from './data-streamer';
import { Sockets } from './sockets';
import { createStore, applyMiddleware } from 'redux';
import { taskReducer } from '../src/store/reducers';
import { StoreState } from '../src/store/actionTypes';
import { StreamerMiddleware } from './streamer-middleware';

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

let store: any = createStore(
	taskReducer,
	data,
	applyMiddleware( new StreamerMiddleware( streamer ).handler() )
);

const PORT = process.env.PORT || 3000;

const server = app.listen( PORT, () => {
  console.info('Socket server listening on port ' + PORT );

	new Sockets( server, store );
});
