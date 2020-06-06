import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

// import {createUser} from '../actions/users.js'
import {submitCounterForm, updateCounterForm} from '../../actions/counterForm.js'
import CheckboxesGroup from './counterOptionsCheckboxes.js'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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

export const CounterForm = props => {

  const classes = useStyles()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.submitCounterForm(props)
    props.history.push('/actions/new')
  }

  const handleOnChange = (e) => {
    props.updateCounterForm({name: 'name', value: e.target.value})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <CategoryIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          I want to count...
        </Typography>

        <form className={classes.form} onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
            <TextField required fullWidth variant="outlined" label="Thing to count" name="counter_name" onChange={handleOnChange} />
            </Grid>

            <CheckboxesGroup />

            <Button type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}

              >Add Thing!</Button>
          </Grid>

        </form>

      </div>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitCounterForm: data => dispatch(submitCounterForm(data)),
    updateCounterForm: data => dispatch(updateCounterForm(data))
  }
}

const mapStateToProps = (state) => {
  return {
    counterFormData: state.counterFormReducer
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterForm))
