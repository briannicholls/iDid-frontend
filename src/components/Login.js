import React, { useState } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {submitCredentials} from '../actions/loginForm.js'
import {setCurrentUser} from '../actions/currentUser.js'
// Material UI
import GridItem from './mui_branded/GridItem'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles( theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
    paddingTop: 0
  },
  form: {
    width: '100%',
  },
  gridItemLogo: {
    margin: 55,
    padding: 0
  }
}))

export const Login = (props) => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.submitCredentials({email, password})
  }

  const handleRegisterClick = (e) => {
    e.preventDefault()
    props.history.push("/signup")
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>

      {props.currentUser.server_message === 'Not logged in!' ? null : props.currentUser.server_message}

      <form className={classes.form} onSubmit={handleOnSubmit}>

        <Grid container spacing={4}>

          <GridItem className={classes.gridItemLogo} children={
            <img src="/logo512.png"
              style={{maxWidth: '100%',  margin: 0,  }} 
            />

          } />

          <Grid item xs={12} className={classes.logo}>
            <TextField fullWidth variant="outlined" label="e-mail" type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" label="password" type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" fullWidth value="Log In" variant="contained" color="primary">Log In</Button>
          </Grid>
          
          <GridItem xs={12} children={
            <Button style={{margin: 'auto', textAlign: 'center'}} 
              fullWidth color='secondary' variant="contained"
              onClick={handleRegisterClick}>Create an Account</Button>
          }/>
          
        </Grid>

          

      </form>

      <br />



      <br />
      <sub>Copyright 2022 Brian Nicholls</sub>

      {props.requesting === true ? <p>Logging In</p> : null}

    </Container>
  )
}

const mapStateToProps = state => {
  return {
    requesting: state.loginFormReducer.requesting,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitCredentials: creds => dispatch(submitCredentials(creds)),
    setCurrentUser: userData => dispatch(setCurrentUser(userData))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
