import React from 'react';
import {connect} from 'react-redux'
// import Action from './action.js'

export const ActionsList = (props) => {

  const renderActions = () => {
    // 
    // return props.actions.map(action => {
    //   return <li>{action.counterId}</li>
    // })
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
    actions: state.actions
  }
}

export default connect(mapStateToProps)(ActionsList)
