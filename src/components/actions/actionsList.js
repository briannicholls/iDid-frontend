import React from 'react';

export const ActionsList = (props) => {

  const renderActions = () => {
    return this.props.actions.map(action => {
      return <li>{action.counterId}</li>
    })
  }

  return <p>I'm going to list all the Action elements.</p>
}

export default ActionsList
