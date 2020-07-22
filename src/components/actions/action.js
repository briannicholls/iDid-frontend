import React from 'react';

export default function Action(props) {

  const dateTime = props.action.when

  return (
    <li>
      I did <strong>{props.kind === "timed" ? `${props.action.reps} ${props.unit}s of` : props.action.reps} {props.action.counter.name}  {props.kind === "weighted" ? `(${props.action.weight} ${props.unit})` : null}</strong> on {dateTime}
    </li>
  )
}
