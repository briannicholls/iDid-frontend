import React, { Component } from 'react';
import ActionsList from './actionsList.js'

import {connect} from 'react-redux'

import {fetchUserActions} from '../../actions/actions.js'

class ActionsContainer extends Component {

  componentDidMount() {
    console.log('actionsContainerMounted')
    
  }

  render() {
    return (
      <ActionsList actions={this.props.actions} />
    )
  }
}

const mapStateToProps = state => {
  return {
    actions: state.actionsReducer,
    currentUser: state.currentUser,
    value: state.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserActions: (userId) => dispatch(fetchUserActions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer)
