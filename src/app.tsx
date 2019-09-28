import React = require("react");
import { Component, ChangeEvent } from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store/store";
import TaskManager from "./ui-components/task-manager";
import { Store } from "redux";
import { StoreState, TaskAction } from "./store/actionTypes";

interface AppState {
  userName: string;
	isLoggedIn: boolean;
}

export class App extends Component< {}, AppState > {
	constructor( props: Readonly<{}> ) {
		super(props);

		this._store = configureStore();
		this.state = {
			userName: '',
			isLoggedIn: false
		}
	}

	userNameInputChange( event: ChangeEvent ) {
		this.setState({
			userName: event.target['value']
		})
	}

	logginPanel() {
		return (
			<div className="rt-update-todo">
				<div className="inline-middle half-width">
					<input
						placeholder="Enter user name"
						value={ this.state.userName }
						onChange={ event => this.userNameInputChange( event ) }
					/>
				</div>
				<div  className="inline-middle half-width align-right bottom-margin">
					<button onClick={ () => this.setState({ isLoggedIn: this.state.userName.length > 0 }) }>
						Loggin
					</button>
				</div>
			</div>
		)
	}

	tasksPanel() {
		return(
			<div className="rt-update-todo">
				<div className="inline-middle half-width">
					<h2><strong>User: </strong>{ this.state.userName }</h2>
				</div>
				<div  className="inline-middle half-width align-right bottom-margin">
					<button onClick={ ()=> this.setState({isLoggedIn: false }) }>
						Logout
					</button>
				</div>
				<Provider store={ this._store }>
					<TaskManager user={ this.state.userName }/>
				</Provider>
			</div>
		)
	}

	render() {
		return(
			<div className="row">
				<div className="column">
				</div>
				<div className="double-column">
					{	this.state.isLoggedIn? this.tasksPanel() : this.logginPanel()	}
				</div>
				<div className="column">
				</div>
			</div>
		);
	}

	private _store: Store<StoreState, TaskAction>;
}
