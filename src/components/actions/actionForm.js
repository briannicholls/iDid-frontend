import React, {useState} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import CounterSelectBox from '../counters/selectBox.js'
import {addAction} from '../../actions/actionForm.js'
import EzButton from './EzButton'
// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => (
  {
    paper: {
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      margin: 'auto',
      padding: '2em',
      alignItems: 'center',
      textAlign: 'center',
      alignSelf: 'center'
    },
  }));

export function ActionForm(props) {
  const classes = useStyles();

  const [reps, setReps] = useState(0)
  const [counter, setCounter] = useState('')

  const handleChangeReps = (event) => {
    setReps(parseInt(event.target.value))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.addAction({reps, counter_id: counter.id, user_id: props.currentUser.id})
    props.history.push('/actions')
  }

  const handleOnClick = () => {
    props.history.push('/counters/new')
  }

  const handleEzButtonPress = (val) => {
    const newVal = parseInt(reps) + parseInt(val)
    setReps(newVal)
  }

  const handleUpdateCounter = (newValue) => {
    const newCounter = props.counters.find(item => item.name === newValue)
    if (newCounter) {
      setCounter(newCounter)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">I did...</Typography>

        <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
          <TextField
            required
            fullWidth
            autoFocus
            id="reps"
            variant="outlined"
            margin="normal"
            label="This many"
            name="reps"
            type="number"
            value={reps}
            onChange={handleChangeReps}
          />

          <Container className={classes.buttons}>
            <EzButton increment={handleEzButtonPress} numLabel={'-10'}></EzButton>
            <EzButton increment={handleEzButtonPress} numLabel={'-5'}></EzButton>
            <EzButton increment={handleEzButtonPress} numLabel={'-1'}></EzButton>
            <EzButton increment={handleEzButtonPress} numLabel={'+1'}></EzButton>
            <EzButton increment={handleEzButtonPress} numLabel={'+5'}></EzButton>
            <EzButton increment={handleEzButtonPress} numLabel={'+10'}></EzButton>
          </Container>

          <CounterSelectBox options={props.counters} updateCounter={handleUpdateCounter} />

          {counter.kind === 'weighted' ? <TextField label={"Weight"} variant='outlined' /> : null}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >Submit</Button>

          <Button
            onClick={handleOnClick}
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.submit}
          >Count Something Else</Button>

        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    counters: state.counters,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAction: (actionData) => dispatch(addAction(actionData))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionForm))
