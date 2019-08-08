import * as React from "react";

export const App = (props: { name: string }): JSX.Element => (
  <div className="container">
    <h1>Hello from react</h1>
    <h2>Welcome {props.name}!</h2>
  </div>
);
