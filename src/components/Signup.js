import React, {useState} from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/users.js'
import {timezones} from '../lib/timezones.js'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Signup = props => {
  const classes = useStyles()

  const [formData] = useState({})

  const handleOnSubmit = e => {
    e.preventDefault()
    props.createUser(formData)
    .then(() => {
      if (!props.loginError) {
        props.history.push('/')
      } 
    }) 
  }

  const handleOnChange = (e) => {
    formData[e.target.name] = e.target.value
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.paper}>
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField required fullWidth variant="outlined" label="First Name" name="fname" value={props.fname} onChange={handleOnChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField required fullWidth variant="outlined" label="Last Name" name="lname" value={props.lname} onChange={handleOnChange} />
          </Grid>

          <Grid item xs={12}>
            <TextField required fullWidth variant="outlined" label="E-mail" name="email" value={props.email} onChange={handleOnChange} />
          </Grid>

          <Grid item xs={12}>
            <TextField required fullWidth variant="outlined" label="Password" name="password" type="password" value={props.password} onChange={handleOnChange} />
          </Grid>

          <Grid item xs={12}>
            <TextField required fullWidth variant="outlined" label="Confirm Password" name="password_confirmation" type="password" value={props.password_confirmation} onChange={handleOnChange} />
          </Grid>

          <Grid item xs={12}>
            <NativeSelect name="time_zone" value={formData.time_zone} onChange={handleOnChange}>
              {timezones.map((timezone, index) => {
                return <option value={timezone.value} key={index}>{timezone.value}</option>
              })}
            </NativeSelect>
          </Grid>

          {props.loginError ? (
            <Alert severity="error">{props.loginError}</Alert>
          )
            : null
          }

          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}><LockOutlinedIcon /> &nbsp;Sign Up 
          </Button>
        </Grid>
      </form>

      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    loginError: state.errors.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: userData => dispatch(createUser(userData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
