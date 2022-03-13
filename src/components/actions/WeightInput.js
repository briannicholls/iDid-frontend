import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

export default function WeightInput(props) {

  return (
    <TextField
      label={`Weight (${props.unit})`}
      variant='outlined'
      type="number"
      onChange={props.handleWeightChange}
      value={props.weight}
      name="weight"
      gutterBottom
    />
  )
}
