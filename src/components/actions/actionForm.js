import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CounterSelectBox from '../counters/selectBox.js'
import {updateActionForm, addAction} from '../../actions/actionForm.js'

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function ActionForm(props) {
  const classes = useStyles();

  const handleOnChange = (event) => {
    event.persist()
    props.updateActionForm(event)
    if (props.formData.user_id === '') {
      props.updateActionForm({target: {name: 'user_id', value: props.currentUser.id }})
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.addAction(props.formData)
  }

  const handleOnClick = () => {
    props.history.push('/counters/new')
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          I did...
        </Typography>
        <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="reps"
            label="This many"
            name="reps"
            autoFocus
            type="number"
            onChange={handleOnChange}
          />

          <CounterSelectBox onInputChange={handleOnChange} options={props.counters}/>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Submit
          </Button>

          <Button
            onClick={handleOnClick}
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >
            Count Something Else
          </Button>

        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    counters: state.countersReducer,
    formData: state.actionFormReducer,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateActionForm: data => dispatch(updateActionForm(data)),
    addAction: (actionData) => dispatch(addAction(actionData))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionForm))
