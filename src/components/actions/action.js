import React from 'react';

export default function Action(props) {

  // const dateTime = new Date(props.action.created_at).toUTCString()
  const dateTime = props.action.created_at

  const weight = [props.action.weight, props.action.weight_unit]
  const time = [props.action.time, props.action.time_unit]
  // console.log(props.action)

  let weightInfo;
  let timeInfo;

  if (weight[0]) {
    weightInfo = `(${weight[0]} ${weight[1]}s)`
  } else if (time[0]) {
    timeInfo = `(${time[0]} ${time[1]}s)`
  }

  return (
    <li>
      I did <strong>{props.action.reps} {props.action.counter.name} {timeInfo ? timeInfo : null} {weightInfo ? weightInfo : null}</strong> on {dateTime}
    </li>
  )
}
