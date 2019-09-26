import * as React from "react";
import { render } from "react-dom";
import { TaskManager } from "./ui-components/task-manager";

render(<TaskManager/>, document.getElementsByTagName("app")[0]);
