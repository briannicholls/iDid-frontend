import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import {getCurrentUser} from './actions/currentUser.js'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default connect(null, {getCurrentUser})(App);
