import * as React from 'react'

export interface Props {
    count: number,
    onClickButton: () => void;
}

export const Game = (props: Props): JSX.Element => (
    <div>
      <div>{props.count === 0? "You have no clips yet. Push the button to start generating clips." : `Number of clips is ${props.count}`}</div>
      <button onClick={props.onClickButton}>New clip</button>
    </div>
  );