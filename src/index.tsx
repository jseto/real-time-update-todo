import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import TaskManager from "./ui-components/task-manager";
import { configureStore } from "./store/store";

const store = configureStore();

const Root = ()=>(
	<Provider store={ store }>
		<TaskManager/>
	</Provider>
);

render( <Root />,	document.getElementsByTagName("app")[0] );
