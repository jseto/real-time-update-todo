import * as React from "react";
import { render } from "react-dom";
import { App } from "./app";

render(<App name="cool working" />, document.getElementsByTagName("app")[0]);
