import React, { useState } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


import {submitCredentials} from '../actions/loginForm.js'
import {setCurrentUser} from '../actions/currentUser.js'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  }
})
)
export const Login = (props) => {

  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.submitCredentials({email, password})
  }

  const handleRegisterClick = () => {
    props.history.push("/signup")
  }

  return (
      <Container component="main" maxWidth="xs" className={classes.paper}>

      <Avatar className={classes.avatar} src={'/logo512.png'} />

      <p>{props.currentUser.server_message === 'Not logged in!' ? null : props.currentUser.server_message}</p>

      <Typography component="h1" variant="h5">Log In</Typography>

      <form className={classes.form} onSubmit={handleOnSubmit}>

        <Grid container spacing={4}>

          <Grid item xs={12} >
          <TextField required fullWidth variant="outlined" label="e-mail" type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth variant="outlined" type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" fullWidth value="Log In" variant="contained" color="primary">Log In</Button>
          </Grid>
        </Grid>

      </form>

      <Grid container>
        <Grid item><Button fullWidth color='secondary' onClick={handleRegisterClick}>Register</Button></Grid>
      </Grid>

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
