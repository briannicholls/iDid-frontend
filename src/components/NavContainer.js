import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import {getCurrentState} from '../actions/value.js'
import {fetchUserActions} from '../actions/actions.js'
import {changeAppState} from '../actions/value.js'
import BottomNav from './BottomNav'

class NavContainer extends Component {

  handleChangeState = (val) => {
    if (val === 2) {fetchUserActions(this.props.currentUser)} // history tab
    this.props.history.push(valueMap[val])
    this.props.changeAppState(val) // server POST request
  }

  render() {
    return ( <BottomNav value={this.props.value}
                 changeAppState={this.handleChangeState} /> )
  }
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
