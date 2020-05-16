import React, { Component } from 'react';
import ActionsList from './actionsList.js'

import {connect} from 'react-redux'

import {fetchUserActions} from '../../actions/actions.js'

class ActionsContainer extends Component {

  componentDidMount() {
    fetchUserActions(this.props.currentUser.id)
  }

  render() {
    return (
      <ActionsList actions={this.props.actions} />
    )
  }
}

const mapStateToProps = state => {
  return {
    actions: state.actions,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserActions: (userId) => dispatch(fetchUserActions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer)
