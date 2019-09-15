import * as React from "react";
// import * as ReactDOM from "react-dom";

import { Component } from "react";

export interface AppProps {
  name: string;
}

interface AppState {
  name: string;
}

export class App extends Component<AppProps, AppState> {

	constructor(props: AppProps) {
    super(props);

    this.state = { name: props.name };
  }

	stringToWrite() {
		return 'Hello world';
	}

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: this.stringToWrite()});
    }, 2000);
  }

  render() {
    return <h1>Hello props: {this.props.name} state: {this.state.name}</h1>;
  }
}
