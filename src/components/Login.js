import React, { useState } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {submitCredentials} from '../actions/loginForm.js'
import {setCurrentUser} from '../actions/currentUser.js'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(8)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
})
)
export const Login = (props) => {

  const classes = useStyles()

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
      <Container component="main" maxWidth="xs" className={classes.paper}>

      <Avatar className={classes.avatar} >

      </Avatar>

      <p>{props.currentUser.server_message === 'Not logged in!' ? null : props.currentUser.server_message}</p>

      <Grid container>
        <Grid item><Link to={'/signup'}>Register</Link></Grid>
      </Grid>

      <Typography component="h1" variant="h5">Log In</Typography>

      <form className={classes.form} onSubmit={handleOnSubmit}>

      <Grid container spacing={4}>

        <Grid item xs={12} >
        <TextField required fullWidth variant="outlined" label="e-mail" type="email" name="email" value={loginFormData.email} onChange={handleOnChange}/>
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth variant="outlined" type="password" name="password" value={loginFormData.password} onChange={handleOnChange}/>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" fullWidth value="Log In" variant="contained" color="primary">Log In</Button>
        </Grid>
      </Grid>

      </form>


      {logInStatus()}
      {listErrors()}
    </Container>
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
