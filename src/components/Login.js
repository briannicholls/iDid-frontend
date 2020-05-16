import React, { Component } from 'react';
import {connect} from 'react-redux'
import {submitCredentials} from '../actions/loginForm.js'
import {setCurrentUser} from '../actions/currentUser.js'
import {Link} from 'react-router-dom'

class Login extends Component {

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    // console.log('submitting form with data:')
    // console.log(this.state)
    this.props.submitCredentials(this.state)
  }

  logInStatus = () => {
    // console.log(this.state)
    return this.props.requesting === true ? <p>LOGGING IN</p> : null
  }

  listErrors = () => {
    return (this.props.errors) ? <p>{this.props.errors}</p> : null
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label name="email">Email</label>
          <input type="email" name="email" value={this.props.email} onChange={this.handleOnChange}/>
          <br></br>
          <label name="password">Password</label>
          <input type="password" name="password" value={this.props.password} onChange={this.handleOnChange}/>
          <br></br>
          <input type="submit" value="Log In" />
        </form>

        <Link to={'/signup'}>Register</Link>

        {this.logInStatus()}
        {this.listErrors()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    requesting: state.loginFormReducer.requesting,
    error: state.loginFormReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitCredentials: creds => dispatch(submitCredentials(creds)),
    setCurrentUser: userData => dispatch(setCurrentUser(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
