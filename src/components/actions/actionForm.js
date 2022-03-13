import React, {useState} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import WeightInput from './WeightInput'
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
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export function ActionForm(props) {
  const classes = useStyles();

  const [counter, setCounter] = useState({})
  const [reps, setReps] = useState(0)
  const [weight, setWeight] = useState(0)

  const handleChangeReps = (event) => setReps(parseInt(event.target.value))
  const handleWeightChange = (e) => setWeight(parseInt(e.target.value))
  const handleEzButtonPress = (val) => setReps(parseInt(reps) + parseInt(val))
  const handleClickNewCounter = () => props.history.push('/counters/new')
  const handleUpdateCounter = (newValue) => setCounter(newValue)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    props.addAction({reps, weight, counter_id: counter.id, user_id: props.currentUser.id})
    props.history.push('/actions')
  }

  return (
    <Grid container
      wrap="nowrap"
      direction='column'
    >
      <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
      <Grid item>
        <Grid container item spacing="2" 
          // style={{alignItems: 'center'}}
          alignItems="center"
          justifyContent='center'
          style={{textAlign: 'center', paddingBottom: 10}}
        >
          <Grid item xs={4}>
            <Typography display='inline' >I did...</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField display='inline' required fullWidth autoFocus={false} variant="outlined"
              margin="normal"
              id="reps"
              label="This many"
              name="reps"
              type="number"
              value={reps}
              onChange={handleChangeReps}
              />
          </Grid>
          
        </Grid>
      </Grid>

      <Grid item xs={12} 
        style={{paddingBottom: 20}}
      >
        <Grid container direction="row"
          spacing={3}
        >
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'+1'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'+5'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'+10'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'-1'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'-5'}></EzButton></Grid>
          <Grid item xs={4} s={4}><EzButton increment={handleEzButtonPress} numLabel={'-10'}></EzButton></Grid>
        </Grid>
      </Grid>

      {counter && counter.kind === 'timed' ? <Container><Typography variant="h3">{counter.measurement_unit}</Typography></Container> : null}

      <Grid item>
        <CounterSelectBox updateCounter={handleUpdateCounter} />
      </Grid>

      {counter && counter.kind === 'weighted' ? <Grid item><WeightInput unit={counter.measurement_unit} weight={weight} handleWeightChange={handleWeightChange} /></Grid> : null}

      <Grid item>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          >Submit</Button>
      </Grid>

      <Grid item>
        <Button
          onClick={handleClickNewCounter}
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          >Count Something Else</Button>
      </Grid>
      </form>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {  currentUser: state.currentUser  }
}

const mapDispatchToProps = dispatch => {
  return {  addAction: (actionData) => dispatch(addAction(actionData))  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionForm))
