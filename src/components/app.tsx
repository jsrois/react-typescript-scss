import * as React from "react";
import { useState } from "react";
import { Game } from "./game";

export const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return count < 10 ? (
    <Game count={count} onClickButton={() => setCount(count + 1)} />
  ) : (
    <div>Congratulations! You have finished.</div>
  );
};
