import React, { useState } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {submitCredentials} from '../actions/loginForm.js'
import {setCurrentUser} from '../actions/currentUser.js'

export const Login = (props) => {

  const [loginFormData, setLoginFormData] = useState({
    email: '', password: ''
  })

  const handleOnChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.submitCredentials(loginFormData)
  }

  const logInStatus = () => {
    return props.requesting === true ? <p>LOGGING IN</p> : null
  }

  const listErrors = () => {
    return (props.errors) ? <p>{props.errors}</p> : null
  }

  return (
    <div>
      <p>{props.currentUser.server_message}</p>
      <form onSubmit={handleOnSubmit}>
        <label name="email">Email</label>
        <input type="email" name="email" value={loginFormData.email} onChange={handleOnChange}/>
        <br></br>
        <label name="password">Password</label>
        <input type="password" name="password" value={loginFormData.password} onChange={handleOnChange}/>
        <br></br>
        <input type="submit" value="Log In" />
      </form>

      <Link to={'/signup'}>Register</Link>

      {logInStatus()}
      {listErrors()}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    requesting: state.loginFormReducer.requesting,
    error: state.loginFormReducer.error,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitCredentials: creds => dispatch(submitCredentials(creds)),
    setCurrentUser: userData => dispatch(setCurrentUser(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
