import React from 'react'
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

  const handleChange = (event) => {
    props.updateCounterForm({
      name: [event.target.name],
      value: event.target.checked
    });
  };

  const error = [props.weighted, props.timed].filter((v) => v).length > 1;

  return (
    <div className={classes.root}>

      <FormControl component="fieldset" error={error} className={classes.formControl}>

        <FormLabel component="legend">Optional (Choose up to one):</FormLabel>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={props.weighted} onChange={handleChange} name="weighted" />}
              label="Track weight with this counter"
            />
            <FormControlLabel
              control={<Checkbox checked={props.timed} onChange={handleChange} name="timed" />}
              label="This is a timed activity"
            />
          </FormGroup>

      </FormControl>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCounterForm: data => dispatch(updateCounterForm(data))
  }
}

const mapStateToProps = (state) => {
  return {
    weighted: state.counterFormReducer.weighted,
    timed: state.counterFormReducer.timed
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckboxesGroup)
