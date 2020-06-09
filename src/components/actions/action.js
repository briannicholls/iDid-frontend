import React from 'react';

export default function Action(props) {

  // const dateTime = new Date(props.action.created_at).toUTCString()
  const dateTime = props.action.when

  const weight = [props.action.weight, props.action.weight_unit]
  const time = [props.action.reps, props.action.time_unit]
  // console.log(props.action)

  let weightInfo;
  let timeInfo;

  if (weight[0]) {
    weightInfo = `(${weight[0]} ${weight[1]}s)`
  } else if (time[1]) {
    timeInfo = `${time[0]} ${time[1]} of `
  }

  return (
    <li>
      I did <strong>{timeInfo ? timeInfo : props.action.reps} {props.action.counter.name}  {weightInfo ? weightInfo : null}</strong> on {dateTime}
    </li>
  )
}
