import React from 'react';
// import {useState} from 'react';

export default function Action(props) {
  // const [likes, setLikes] = useState(0)

  const dateTime = new Date(props.action.created_at).toUTCString()
  console.log(dateTime)
  // const handleOnClick = () => {
  //   setLikes(likes + 1)
  // }

  return (
    <li>
      I did <strong>{props.action.reps} {props.action.name}</strong> on {dateTime}
    </li>
  )
}
