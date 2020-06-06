import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import {getCurrentState} from '../actions/value.js'
import {fetchUserActions} from '../actions/actions.js'
import {changeAppState} from '../actions/value.js'
import BottomNav from './BottomNav'

function NavContainer(props) {

  const handleChangeState = (val) => {
    if (val === 2) {fetchUserActions(props.currentUser)} // history tab
    props.history.push(valueMap[val])
    props.changeAppState(val) // server POST request
  }

  return (
      <BottomNav value={props.value} changeAppState={handleChangeState} position='static' />
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    currentUser: state.currentUser
  }
}

const valueMap = [
  '/',
  '/routines',
  '/actions'
]

const mapDispatchToProps = dispatch => {
  return {
    changeAppState: (val) => dispatch(changeAppState(val)),
    getCurrentState: () => dispatch(getCurrentState()),
    fetchUserActions: (userId) => dispatch(fetchUserActions(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer))
