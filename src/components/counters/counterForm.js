import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addCounter} from '../../actions/counterForm.js'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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

// controlled checkboxes group
export const CounterForm = (props) => {
  const classes = useStyles();

  const [name, setName] = useState('')
  const [measurementUnit, setMeasurementUnit] = useState('')
  const [kind, setKind] = React.useState({
    weighted: false,
    timed: false,
  });

  const handleChange = (event) => {
    setKind({ ...kind, [event.target.name]: event.target.checked });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let counterData = {name, measurement_unit: measurementUnit}
    if (kind.weighted) {
      counterData.kind = 'weighted'
    } else if (kind.timed) {
      counterData.kind = 'timed'
    } else {
      counterData.kind = 'default'
    }
    props.addCounter({counter: counterData})
    props.history.push('/actions/new')
  }

  const error = kind.timed && kind.weighted

  const UnitSelect = () => {
    return (
      <>
        <FormLabel>How Will You Measure It?</FormLabel>
        <NativeSelect
          name='measurement_unit'
          value={measurementUnit}
          onChange={(e) => setMeasurementUnit(e.target.value)}
        >
          <option aria-label="None" value={''}></option>
          <option value={'minutes'}>Minutes</option>
          <option value={'seconds'}>Seconds</option>
          <option value={'lb'}>Pounds (lb)</option>
          <option value={'kg'}>Kilograms (kg)</option>
        </NativeSelect>
      </>
    )
  }

  return (
    <form className={classes.form} onSubmit={handleOnSubmit}>
      <Typography component="h1" variant="h5">I want to count...</Typography>

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <TextField required fullWidth variant="outlined" label="Thing to count" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset" error={error} className={classes.formControl}>

            <FormLabel component="legend">Optional (Choose one):</FormLabel>

            <FormGroup>

              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="weighted" checked={kind.weighted} />}
                label="Track weight with this counter"
              />
              
              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="timed" checked={kind.timed} />}
                label="This is a timed activity"
              />

              { kind.weighted || kind.timed ? 
                <UnitSelect /> : null
              }

            </FormGroup>

            {error ? <FormHelperText>Pick only one please!</FormHelperText> : null}

          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Add Thing!</Button>
        </Grid>

      </Grid>

    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addCounter: counterData => dispatch(addCounter(counterData))
  }
}

export default connect(null, mapDispatchToProps)(CounterForm)
