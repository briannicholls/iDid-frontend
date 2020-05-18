import React from 'react';

export const Action = (props) => {
  const dateTime = props.action.created_at
  return (
    <li>
      I did <strong>{props.action.reps} {props.action.name}</strong> on {dateTime.split('T')[0]} at {dateTime.split('T')[1].slice(0,5)} (UTC)
    </li>
  )
}

export default Action
