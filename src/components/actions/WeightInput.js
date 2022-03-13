import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
  root: {
    marginTop: 20
  },
}));

const WeightInput = props => {
  const classes = useStyles();

  return (
    <TextField
      required
      label={`Weight (${props.unit})`}
      variant='outlined'
      name="weight"
      type="number"
      onChange={props.handleWeightChange}
      value={props.weight}
      className={classes.root}
    />
  )
}

export default WeightInput