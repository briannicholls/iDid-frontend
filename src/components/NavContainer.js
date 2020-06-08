import React from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import BottomNav from './BottomNav'
import {getCurrentState} from '../actions/value.js'
import {fetchUserActions} from '../actions/actions.js'
import {changeAppState} from '../actions/value.js'

import {withStyles} from '@material-ui/core/styles'

const useStyles = theme => ({
  // bottomNav: {
  //   width: '100vw',
  //   display: 'flex',
  //   bottom: '0px',
  //   top: 'auto',
  //   margin: 'auto',
  // },
})

function NavContainer({value, currentUser, changeAppState, getCurrentState, fetchUserActions, classes, history}) {

  const handleChangeState = (val) => {
    if (val === 2) {fetchUserActions(currentUser)} // history tab
    history.push(valueMap[val])
    changeAppState(val) // server POST request
  }

  return (
      <BottomNav className={classes.bottomNav} value={value} changeAppState={handleChangeState} position='static' />
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

export default withStyles(useStyles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer)))
