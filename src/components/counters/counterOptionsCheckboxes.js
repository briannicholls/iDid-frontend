import React, {useState} from 'react'
import {connect} from 'react-redux'

// import {createUser} from '../actions/users.js'
import {updateCounterForm} from '../../actions/counterForm.js'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

// controlled checkboxes group
export const CheckboxesGroup = (props) => {
  const classes = useStyles();

  const [measurementUnit, setMeasurementUnit] = useState('default')
  const [kind, setKind] = React.useState({
    weighted: false,
    timed: false,
  });

  const handleChange = (event) => {
    setKind({ ...kind, [event.target.name]: event.target.checked });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  const error = kind.timed && kind.weighted

  const UnitSelect = () => {
    return (
        <FormControl>
          <InputLabel>How Will You Measure It?</InputLabel>
          <NativeSelect
            value={measurementUnit}
            onChange={(e) => setMeasurementUnit(e.target.value)}
            name='measurement_unit'
          >
            <option aria-label="None" value="" />
            {kind.timed ? <><option value={'minutes'}>Minutes</option><option value={'seconds'}>Seconds</option></> : null}
            {kind.weighted ? <><option value={'lb'}>Pounds (lb)</option><option value={'kg'}>Kilograms (kg)</option></> : null}
          </NativeSelect>
        </FormControl>
    )
  }

  return (
    <div className={classes.root}>

      <Avatar className={classes.avatar}>
        <CategoryIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        I want to count...
      </Typography>

      <form className={classes.form} onSubmit={handleOnSubmit}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
          <TextField required fullWidth variant="outlined" label="Thing to count" name="counter_name" />
          </Grid>

          <CheckboxesGroup />

          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            >Add Thing!</Button>
        </Grid>


      <FormControl component="fieldset" error={error} className={classes.formControl}>

        <FormLabel component="legend">Optional (Choose one):</FormLabel>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={props.weighted} onChange={handleChange} name="weighted" checked={kind.weighted} />}
              label="Track weight with this counter"
            />
            <FormControlLabel
              control={<Checkbox checked={props.timed} onChange={handleChange} name="timed" checked={kind.timed} />}
              label="This is a timed activity"
            />
          </FormGroup>

          {error ? <FormHelperText>Pick only one please!</FormHelperText> : null}

          {kind.timed || kind.weighted ? <UnitSelect /> : null}
      </FormControl>

      </form>
    </div>
  );
}

export default CheckboxesGroup
