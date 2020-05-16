import React, { Component } from 'react';
import {connect} from 'react-redux'

import {getCurrentState} from '../actions/value.js'

import { withRouter } from 'react-router-dom';

import BottomNav from './BottomNav'

import {changeAppState} from '../actions/value.js'

class NavContainer extends Component {

  componentDidMount() {
    // this.props.getCurrentState()
  }

  handleChangeState = (val) => {
    this.props.history.push(valueMap[val])
    this.props.changeAppState(val)
  }

  render() {
    return (
      <BottomNav value={this.props.value}
                 changeAppState={this.handleChangeState}
                 />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
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
    getCurrentState: () => dispatch(getCurrentState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavContainer))
