import * as ReactDOM from "react-dom"
import * as React from "react"
import { App } from "./components/app"
import "./styles.scss"
import { DefaultTimer } from "./components/Timer";

ReactDOM.render(<App timer={new DefaultTimer()} />, document.getElementById("app"));
