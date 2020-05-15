import React, {Component} from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Signup() {
  const classes = useStyles();

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField required fullWidth variant="outlined" label="First Name" name="fname" />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField required fullWidth variant="outlined" label="Last Name" name="lname" />
            </Grid>


          <Grid item xs={12}>
          <TextField required fullWidth variant="outlined" label="Password" name="password" />
          </Grid>

          <Grid item xs={12}>
          <TextField required fullWidth variant="outlined" label="Confirm Password" name="password_confirmation" />
          </Grid>

          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>Sign Up</Button>
        </Grid>

        </form>

        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>

    </div>
    </Container>
  )

}
