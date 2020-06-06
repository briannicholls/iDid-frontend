import React from 'react';

export default function Action(props) {

  const dateTime = new Date(props.action.created_at).toUTCString()

  return (
    <li>
      I did <strong>{props.action.reps} {props.action.name}</strong> on {dateTime}
    </li>
  )
}
