import React from 'react';
import {connect} from 'react-redux'

import ActionsList from './actionsList.js'

function ActionsContainer(props) {


  return (
    <ActionsList actions={props.actions} />
  )
}

const mapStateToProps = state => {
  return {
    actions: state.actions,
    currentUser: state.currentUser,
    value: state.value
  }
}

export default connect(mapStateToProps)(ActionsContainer)
