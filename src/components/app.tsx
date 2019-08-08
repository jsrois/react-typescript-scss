import * as React from "react";
import { useState } from "react";

export const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
  <div>
    <div>{count === 0? "You have no clips yet. Push the button to start generating clips." : `Number of clips is ${count}`}</div>
    <button onClick={() => setCount(count+1)}>New clip</button>
  </div>
)};
