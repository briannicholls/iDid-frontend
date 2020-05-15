import React from 'react';
import {connect} from 'react-redux'
import {logout} from '../actions/currentUser.js'

const Logout = (props) => {
  const handleOnClick = (e) => {
    props.logout()
  }

  return (
    <button onClick={handleOnClick}>Log Out</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)
