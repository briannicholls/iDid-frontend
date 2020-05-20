import React, { Component } from 'react';
import {connect} from 'react-redux'

import {fetchUserActions} from '../../actions/actions.js'
import ActionsList from './actionsList.js'

class ActionsContainer extends Component {

  componentDidMount() {
    console.log('actionsContainerMounted')
    // this.props.fetchUserActions(this.props.currentUser.id)
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
