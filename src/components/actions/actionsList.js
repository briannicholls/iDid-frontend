import React from 'react';
import {connect} from 'react-redux'
import Action from './action.js'

export const ActionsList = (props) => {

  const renderActions = () => {



    return props.actions.map(action => {
      return <li key={action.id}><Action action={action} /></li>
    })
  }

  return (
    <>
      <p>I'm going to list all the Action elements.</p>
      {renderActions()}
    </>
  )
}

const mapStateToProps = state => {
  return {
    actions: state.actionsReducer
  }
}

export default connect(mapStateToProps)(ActionsList)
