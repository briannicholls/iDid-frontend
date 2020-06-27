import React, {useState} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import WeightInput from './WeightInput'
import TimeInput from './TimeInput'

import CounterSelectBox from '../counters/selectBox.js'
import {addAction} from '../../actions/actionForm.js'
import EzButton from './EzButton'
// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
    gridItem: {
      margin: '10px',
    }
  }));

export function ActionForm(props) {
  const classes = useStyles();

  const [reps, setReps] = useState(0)
  const [counter, setCounter] = useState('')
  const [weight, setWeight] = useState(0)

  const handleChangeReps = (event) => {
    setReps(parseInt(event.target.value))
  }

  const handleWeightChange = (e) => {
    setWeight(parseInt(e.target.value))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.addAction({reps, weight, counter_id: counter.id, user_id: props.currentUser.id})
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
    <Grid container  wrap="nowrap" alignItems="stretch" alignContent='stretch'  direction='column'>

      <Grid item className={classes.gridItem}>
        <Typography component="h1" variant="h5">I did...</Typography>
      </Grid>

      <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
      <Grid item className={classes.gridItem}>
        <TextField
          required
          fullWidth
          autoFocus={false}
          id="reps"
          variant="outlined"
          margin="normal"
          label="This many"
          name="reps"
          type="number"
          value={reps}
          onChange={handleChangeReps}
          />
      </Grid>


      <Grid item xs={12}>
        <Grid container direction="row" alignContent="center" alignItems="center" justify="center">
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'+1'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'+5'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'+10'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'-1'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'-5'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'-10'}></EzButton></Grid>
        </Grid>
      </Grid>

      {counter.kind === 'timed' ? <Container><Typography variant="h3">{counter.measurement_unit}</Typography></Container> : null}

      <Grid item className={classes.gridItem}>
        <CounterSelectBox options={props.counters} updateCounter={handleUpdateCounter} />
      </Grid>

      {counter.kind === 'weighted' ? <Grid item className={classes.gridItem}><WeightInput unit={counter.measurement_unit} weight={weight} handleWeightChange={handleWeightChange} /></Grid> : null}

      <Grid item className={classes.gridItem}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          >Submit</Button>
      </Grid>

      <Grid item className={classes.gridItem}>
        <Button
          onClick={handleOnClick}
          fullWidth
          variant="contained"
          color="inherit"
          className={classes.submit}
          >Count Something Else</Button>
      </Grid>
      </form>
    </Grid>
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
