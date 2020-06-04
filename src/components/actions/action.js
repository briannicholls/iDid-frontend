import React from 'react';
// import {useState} from 'react';

export default function Action(props) {
  // const [likes, setLikes] = useState(0)

  const dateTime = props.action.created_at

  // const handleOnClick = () => {
  //   setLikes(likes + 1)
  // }

  return (
    <li>
      I did <strong>{props.action.reps} {props.action.name}</strong> on {dateTime.split('T')[0]} at {dateTime.split('T')[1].slice(0,5)} (UTC)
    </li>
  )
}
