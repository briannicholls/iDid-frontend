import React from 'react';

export default function Action(props) {

  const dateTime = new Date(props.action.created_at).toUTCString()

  const weight = [props.action.weight, props.action.weight_unit]
  // console.log(props.action)


  return (
    <li>
      I did <strong>{props.action.reps} {props.action.name} {weight[0] ? `(${weight[0]} ${weight[1]}s)` : null}</strong> on {dateTime}
    </li>
  )
}
