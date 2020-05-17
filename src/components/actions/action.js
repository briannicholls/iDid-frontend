import React from 'react';

export const Action = (props) => {
  return (
    <div>
      I did <strong>{props.action.reps} {props.action.name}</strong> on {Date(props.action.created_at).toString().split('(')[0]}
    </div>
  )
}

export default Action
