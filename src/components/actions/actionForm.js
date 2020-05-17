import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CounterSelectBox from '../counters/selectBox.js'
import {updateActionForm} from '../../actions/actionForm.js'

import {connect} from 'react-redux'

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function ActionForm(props) {
  const classes = useStyles();

  const handleOnChange = (event) => {
    props.updateActionForm(event)
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          I did...
        </Typography>
        <form className={classes.form} noValidate>
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
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>

        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    counters: state.countersReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateActionForm: data => dispatch(updateActionForm(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm)