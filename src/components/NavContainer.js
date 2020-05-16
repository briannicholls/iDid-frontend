import React, { Component } from 'react';
import {connect} from 'react-redux'

class NavContainer extends Component {
  render() {
    return (
      <BottomNav value={this.props.value} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

export default connect(mapStateToProps)(NavContainer)
