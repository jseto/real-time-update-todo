import { TaskAction, ADD_TASK } from "../src/store/actionTypes"
import { Store } from "redux"
import { DataStreamer } from "./data-streamer"

export class StreamerMiddleware<T> {
	constructor( streamer: DataStreamer<T> ) {
		this._streamer = streamer;
	}

	handler() {
		return ( store: Store ) => next => ( action: TaskAction ) => {
			const result = next(action)
			if ( action.type === ADD_TASK ) {
				this._streamer.writeData( store.getState().tasks )
			}
		  return result
		}
	}

	private _streamer: DataStreamer<T>;
}
