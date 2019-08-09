import * as React from "react";
import { useState, useEffect } from "react";
import { Game } from "./game";
import { Timer } from "./timer";

export interface Props {
  timer: Timer;
}

export const App = (props: Props): JSX.Element => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 1) {
      props.timer.start();
    }
  });

  return count < 10 ? (
    <Game count={count} onClickButton={() => setCount(count + 1)} />
  ) : (
    <>
      <div>Congratulations! You have finished.</div>
      <div>{`Your time is ${props.timer.elapsed() / 1000} sec`}</div>
    </>
  );
};
